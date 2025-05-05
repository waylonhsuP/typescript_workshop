import { validate } from "../validator";
validate("../workspace/02-Advanced/03-utility_2.ts", {
  CarBrandAndModel: "Pick<Car, 'brand' | 'model'>",
  CarWithoutColor: "Omit<Car, 'color'>",
});

