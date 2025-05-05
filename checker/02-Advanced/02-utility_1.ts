import { validate } from "../validator";
validate("../workspace/02-Advanced/02-utility_1.ts", {
  getParameters: "Parameters<typeof getFunctionReturnTypeAndParameters>",
  getReturnType: "ReturnType<typeof getFunctionReturnTypeAndParameters>",
  getAwaitedReturnType: "Awaited<getReturnType>",
});
