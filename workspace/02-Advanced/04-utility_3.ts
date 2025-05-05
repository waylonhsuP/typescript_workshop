// Exclude 可以用來從一個聯合型別中排除某些成員
type A = 'a' | 'b' | 'c';
type B = Exclude<A, 'a'>;

// Extract 可以用來從一個聯合型別中提取某些成員
type C = Extract<A, 'a'>;

/* validate */
type unionType = 'a' | 'b' | 'c' | 'd' | 'e';

// 請使用 Exclude 來排除 'a' 和 'b' 屬性, 並且命名為 ExcludeType

// 請使用 Extract 來提取 'a' 和 'b' 屬性, 並且命名為 ExtractType