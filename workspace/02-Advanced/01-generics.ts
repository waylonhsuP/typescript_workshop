// Generic 是 TypeScript 提供的一種語法，用於創建可重複使用的程式碼，讓函式、介面或類別能夠處理多種型別，而不需要為每種型別分別定義邏輯。

// Generic Function
function identity<T>(value: T): T {
  return value;
}

const numberIdentity = identity<number>(42); // 泛型指定為 number
const stringIdentity = identity<string>("Hello, TypeScript!"); // 泛型指定為 string

// Generic Interface
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 123 };
const stringBox: Box<string> = { value: "Hello" };

// Generic Class
class GenericStack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const numberStack = new GenericStack<number>();
numberStack.push(10);
numberStack.push(20);

const stringStack = new GenericStack<string>();
stringStack.push("TypeScript");
stringStack.push("Generics");

// 泛型約束：限制泛型的型別
interface Lengthwise {
  length: number;
}

function logWithLength<T extends Lengthwise>(value: T): void {
  console.log(`Value has length: ${value.length}`);
}

logWithLength("Hello"); // 輸出：Value has length: 5
logWithLength([1, 2, 3]); // 輸出：Value has length: 3
logWithLength(42); // 錯誤：number 沒有 length 屬性

/* validate */
// 請宣告一個名稱為 `getFirstElement` 的 function, 並且使用 generic 的方式宣告