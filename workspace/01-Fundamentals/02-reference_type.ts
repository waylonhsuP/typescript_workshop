// 參考型別 (Reference Types) → Call by Reference
// 儲存的是記憶體參考位址，物件內容可變動。

// Object：最基本的參考型別
let obj: object = { name: "Alice", age: 30 };

// 自定義物件型別（建議使用 type 或 interface）
type ReferenceUser = {
  name: string;
  age: number;
};
let user: ReferenceUser = { name: "Bob", age: 25 };

// 陣列：簡易宣告
let skills: string[] = ["TypeScript", "JavaScript"];
// 陣列：泛型語法
let languages: Array<string> = ["English", "Chinese"];

// Tuple：固定型別與長度的陣列
let position: [number, number] = [100, 200];

// Enum：列舉型別（實際上是一種物件）
enum Status {
  Active,
  Inactive,
  Pending,
}
let currentStatus: Status = Status.Active;

// Function：函式本質上也是物件，可被傳遞與引用
function func(name: string): void {
  console.log("Hello, " + name);
}

// 特殊型別 any / unknown
let anything: any = "Could be anything";
let mystery: unknown = {};


/* validate */
// 請宣告一個名稱為 arr 的 Array, 方法不限, 並且內部只能包含 number 型別的元素

// 請宣告一個名稱為 Animal 的 type, 並且包含以下屬性：name (string), age (number)

// 請宣告一個名稱為 animal 的 object, 並且使用 Animal 型別

// 請宣告一個名稱為 `Color` 的 Enum, 並且依序包含以下顏色：Green, Blue, Red

// 請宣告一個名稱為 `getString` 的 function, 接受一個型別為 string, 命名為 str  的 Parameter 並且 Return String
