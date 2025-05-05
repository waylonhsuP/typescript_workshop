// Union Type：允許變數接受多種型別的值

// 基本範例：變數可以是 string 或 number
let id: string | number;
id = 123; // 合法
id = "ABC123"; // 合法
id = true; // 錯誤：boolean 不是 string 或 number

// 使用 Union Type 定義函式參數
function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log(`ID is a string: ${id.toUpperCase()}`);
  } else {
    console.log(`ID is a number: ${id}`);
  }
}

printId(101); // 輸出：ID is a number: 101
printId("abc"); // 輸出：ID is a string: ABC
printId(true); // 錯誤：boolean 不是 string 或 number

// 結合物件型別
type TextMessage = {
  text: string;
};

type ImageMessage = {
  url: string;
  alt: string;
};

type Message = TextMessage | ImageMessage;

function displayMessage(message: Message): void {
  if ("text" in message) {
    console.log(`Text: ${message.text}`);
  } else {
    console.log(`Image: ${message.url} (alt: ${message.alt})`);
  }
}

displayMessage({ text: "Hello, world!" }); // 輸出：Text: Hello, world!
displayMessage({ url: "image.jpg", alt: "An image" }); // 輸出：Image: image.jpg (alt: An image)

// 高階範例：結合 Array 與 Union Type
let data: (string | number)[] = [1, "two", 3, "four"];
data.forEach((item) => {
  if (typeof item === "string") {
    console.log(`String: ${item}`);
  } else {
    console.log(`Number: ${item}`);
  }
});

/* validate */
// 請定義一個函式 handleInput，接受一個名為 parameter 的聯合型別參數, 聯合型別參數需包含 string, number, boolean, 並且 return void。
