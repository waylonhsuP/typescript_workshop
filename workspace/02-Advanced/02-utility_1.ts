// Awaited 可以用來獲取 Promise 的返回值類型
const promiseNumber = new Promise<number>((resolve) => {
  resolve(42);
})

type awaitPromiseNumber = Awaited<typeof promiseNumber>;

// ReturnType 可以用來獲取函數的返回值類型
const getString = () => {
  return "Hello, TypeScript!";
}

type getStringReturnType = ReturnType<typeof getString>;


// Parameters 可以用來獲取函數的參數類型
const add = (a: number, b: number) => {
  return a + b;
}

type addParameters = Parameters<typeof add>;

/* validate */
const getFunctionReturnTypeAndParameters = async (str: string, bool: boolean) => {
    return {
        str,
        bool,
    }
}

// 請宣告一個名稱為 `getParameters` 的 type, 並且使用 Parameters 的方式宣告

// 請宣告一個名稱為 `getReturnType` 的 type, 並且使用 ReturnType 的方式宣告

// 請宣告一個名稱為 `getAwaitedReturnType` 的 type, 並且使用 Awaited 將上方 getReturnType 的型別取出