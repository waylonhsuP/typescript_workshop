// 不熟悉 typescript 的情況下很有可能會出現這種情況, 但下面這種情形會導致無法正確捕獲錯誤, 並且使用 any 類型會導致錯誤無法正確捕獲
function handleError(err: any) {
  console.error("An error occurred:", err.message);
}

// 使用 class extends Error 來定義錯誤類型
class apiError extends Error {
  statusCode: number;
  message: string;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.name = "ApiError";
  }
}

class runtimeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RuntimeError";
  }
}

class validationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

function handleApiError(err: apiError) {
  console.error(`API Error (${err.statusCode}): ${err.message}`);
}

function handleRuntimeError(err: runtimeError) {
  console.error(`Runtime Error: ${err.message}`);
}

function handleValidationError(err: validationError) {
  console.error(`Validation Error: ${err.message}`);
}

function handleFallbackError(err: Error) {
  console.error(`Fallback Error: ${err.message}`);
}

// 使用 unknown 來定義錯誤類型, 使用 unknown 後 TS 會強制要求我們在使用 err 時要進行類型檢查
function handleError2(err: unknown) {
  if (err instanceof apiError) {
    handleApiError(err);
    return;
  }
  if (err instanceof runtimeError) {
    handleRuntimeError(err);
    return;
  }
  if (err instanceof validationError) {
    handleValidationError(err);
    return;
  }
  
  handleFallbackError(err as Error);
}
