import { validate } from "../validator";
validate("../workspace/02-Advanced/04-utility_3.ts", {
  ExcludeType: "Exclude<unionType, 'a' | 'b'>",
  ExtractType: "Extract<unionType, 'a' | 'b'>",
});

