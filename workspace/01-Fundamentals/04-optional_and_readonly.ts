// Optional 和 Readonly：控制物件屬性的選擇性與不可變性

// 定義物件型別時，使用 `?` 表示屬性是可選的
type User = {
  id: number;
  name: string;
  email?: string; // 可選屬性
};

let user1: User = {
  id: 1,
  name: "Alice",
};

let user2: User = {
  id: 2,
  name: "Bob",
  email: "bob@example.com",
};

// 使用 Readonly 修飾符讓屬性不可變
type Point = {
  readonly x: number;
  y: number;
};

let point: Point = { x: 10, y: 20 };

// 嘗試修改 Readonly 屬性會報錯
point.x = 15; // 錯誤：Cannot assign to 'x' because it is a read-only property.
point.y = 25; // 合法：非 readonly 屬性可以修改

// Optional 和 Readonly 的結合使用
type Config = {
  readonly id?: string; // 可選且不可變
  name: string;
};

let config: Config = {
  name: "MyApp",
};

// 嘗試修改或新增屬性
config.id = "123"; // 錯誤：Cannot assign to 'id' because it is a read-only property.
config.name = "NewApp"; // 合法：非 readonly 屬性可以修改

// Optional 和 Readonly 的結合使用
type Config2 = {
  readonly id?: string; // 可選且不可變
  name: string;
};

let config2: Config2 = {
  name: "MyApp",
};

/* validate */
// 請定義一個名為 optionalAndReadonly 的變數, 內容為物件型別，物件型別需包含 id(readonly string) 和 age(optional string) 的屬性。
