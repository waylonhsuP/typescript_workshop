type User = {
  name: string;
  email?: string; // email 是可選屬性
};

// 直接使用可選屬性（可能會導致錯誤）
function sendEmail(user: User) {
  // 如果 user.email 是 undefined，這裡會報錯
  console.log("Sending email to", (user.email).toLowerCase());
}

// 使用條件檢查避免錯誤
function sendEmailWithCondition(user: User) {
  if (user.email) {
    // 確保 email 存在後再調用 toLowerCase()
    console.log("Sending email to", user.email.toLowerCase());
  } else {
    console.log("No email provided.");
  }
}

// 使用 Optional Chaining 避免錯誤
function sendEmailWithOptionalChaining(user: User) {
  // 使用 ?. 確保只有在 email 存在時才調用 toLowerCase()
  console.log("Sending email to", user.email?.toLowerCase() ?? "No email provided.");
}

// 使用 Nullish Coalescing Operator 提供預設值
function sendEmailWithDefault(user: User) {
  // 如果 email 是 undefined，使用預設值 "unknown@example.com"
  const email = user.email ?? "unknown@example.com";
  console.log("Sending email to", email.toLowerCase());
}

// 使用 TypeScript 的 Non-Null Assertion Operator,
// 除非在其他地方檢查過, 確定這個 parameter 不會是 undefined 才能使用 assertion 的方式處理,
// 否則 TypeScript 無法在開發時幫你做靜態檢查, 導致進入執行時期才發現錯誤
function sendEmailWithNonNullAssertion(user: User) {
  // 使用 ! 告訴 TypeScript email 不會是 null 或 undefined
  console.log("Sending email to", user.email!.toLowerCase());
}