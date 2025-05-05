// Record 可以用來定義動態一個物件的型別，並且指定每個屬性的型別
const hashMap: Record<string, number> = {};


// Pick 可以用來從一個物件型別中選擇某些屬性
type Person = {
    name: string;
    age: number;
    address: string;
}
// 使用 Pick 選出 name 和 age 屬性
type PersonNameAndAge = Pick<Person, 'name' | 'age'>;

// Omit 可以用來從一個物件型別中排除某些屬性

// 使用 Omit 排除 address 屬性
type PersonWithoutAddress = Omit<Person, 'address'>;


/* validate */
type Car = {
    brand: string;
    model: string;
    year: number;
    color: string;
}

// 請使用 Pick 來選出 brand 和 model 屬性, 並且命名為 CarBrandAndModel

// 請使用 Omit 來排除 color 屬性, 並且命名為 CarWithoutColor