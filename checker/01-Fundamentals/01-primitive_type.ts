import { validate } from "../validator";
validate("../workspace/01-Fundamentals/01-primitive_type.ts", { firstName: "string", age: "number", isStudent: "boolean", major: "undefined" });