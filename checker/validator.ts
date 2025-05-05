import { readFileSync } from "fs";
import { Project } from "ts-morph";
import path from "path";

export function validate(
  filePath: string,
  expectedTypes: Record<string, string>
) {
  const absPath = path.resolve(filePath);
  const code = readFileSync(absPath, "utf-8");

  const project = new Project();
  const sourceFile = project.createSourceFile("temp.ts", code);

  let allGood = true;

  for (const [name, expectedType] of Object.entries(expectedTypes)) {
    const varDecl = sourceFile.getVariableDeclaration(name);
    const typeDecl = sourceFile.getTypeAlias(name);
    const ifaceDecl = sourceFile.getInterface(name);
    const enumDecl = sourceFile.getEnum(name);
    const classDecl = sourceFile.getClass(name);
    const funcDecl = sourceFile.getFunction(name);

    if (varDecl) {
      const actualType = varDecl.getType().getText();
      compareAndReport("變數", name, actualType, expectedType);
    } else if (typeDecl) {
      const actualType = typeDecl.getTypeNode()?.getText() ?? "未知型別";
      compareAndReport("型別別名", name, actualType, expectedType);
    } else if (ifaceDecl) {
      const actualType = ifaceDecl
        .getProperties()
        .map((p) => p.getName() + ": " + p.getType().getText())
        .join("; ");
      compareAndReport("介面", name, actualType, expectedType);
    } else if (enumDecl) {
      const actualType = enumDecl
        .getMembers()
        .map((m) => m.getName())
        .join(", ");
      compareAndReport("列舉", name, actualType, expectedType);
    } else if (classDecl) {
      const instanceMembers = classDecl
        .getInstanceMembers()
        .map((m) => m.getName() + ": " + m.getType().getText())
        .join("; ");
      const staticMembers = classDecl
        .getStaticMembers()
        .map((m) => m.getName() + ": " + m.getType().getText())
        .join("; ");
      const actualType = `class { ${instanceMembers} ${staticMembers} }`; // 類別的成員
      compareAndReport("類別", name, actualType, expectedType);
    } else if (funcDecl) {
      const returnType = funcDecl.getReturnType().getText();

      // 取得函式的參數型別
      const paramTypes = funcDecl
        .getParameters()
        .map((param) => param.getName() + ": " + param.getType().getText())
        .join(", ");

      // 組合完整的函式簽名
      const actualType = `(${paramTypes}) => ${returnType}`;

      compareAndReport("函式回傳", name, actualType, expectedType);
    } else {
      console.log(`❌ 找不到名稱為 ${name} 的宣告`);
      allGood = false;
    }
  }

  if (allGood) {
    console.log("🎉 所有檢查通過！");
  }

  function normalizeTypeText(text: string): string {
    return text
      .replace(/\s*;\s*/g, ";") // 移除分號前後多餘空白
      .replace(/\s*:\s*/g, ":") // 移除冒號前後多餘空白
      .replace(/\s*,\s*/g, ",") // 移除逗號前後空白
      .replace(/\s+/g, " ") // 把所有空白壓成一個空格
      .replace(/[\r\n]+/g, " ") // 換行變空格
      .replace(/{\s*/g, "{") // 開頭的 { 去掉空白
      .replace(/\s*}/g, "}") // 結尾的 } 去掉空白
      .trim();
  }

  function compareAndReport(
    kind: string,
    name: string,
    actual: string,
    expected: string
  ) {
    const normActual = normalizeTypeText(actual);
    const normExpected = normalizeTypeText(expected);

    if (normActual !== normExpected) {
      console.log(`❌ ${kind} ${name} 應為 ${expected}，但你寫的是 ${actual}`);
      allGood = false;
    } else {
      console.log(`✅ ${kind} ${name} 型別正確！`);
    }
  }
}
