//https://youtu.be/rPaRVcH9big?t=10797

{
// Conditional Types (Условные типы)

/* 
Conditional Types позволяют создавать типы, которые зависят от условия.
Они полезны для создания более гибких и адаптивных определений типов.
*/

// 1. Conditional Types для проверки типа
type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>;    // type A = true
type B = IsString<number>;     // type B = false

// 2. Conditional Types для фильтрации типов

type FilterStrings<T> = T extends string ? T : never;

type MixedTypes = 'a' | 1 | 'b' | 2 | 'c';
type OnlyStrings = FilterStrings<MixedTypes>; // type OnlyStrings = "a" | "b" | "c"

// 3. Извлечение типа возвращаемого значения функции

type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

function getString(): string {
    return "Hello, World!";
}

function getNumber(): number {
    return 69;
}

type StringReturnType = ReturnTypeOf<typeof getString>; // StringReturnType будет string
type NumberReturnType = ReturnTypeOf<typeof getNumber>; // NumberReturnType будет number
}


//Задача 1. IsNumber
//Создай тип IsNumber<T>, который возвращает "yes", если переданный тип — число, и "no" — в остальных случаях.


{
type IsNumber<T> = T extends number ? "yes" : "no";


type A = IsNumber<17>;            // "yes"
type B = IsNumber<3.14>;          // "yes"
type C = IsNumber<"17">;          // "no"
type D = IsNumber<number[]>;      // "no"
type E = IsNumber<number | string>; // "yes" | "no"
}

//Задача 2. OnlyStrings
//Создай тип OnlyStrings<T>, который из union-типа оставляет только строки (остальные типы полностью убираются).

{
type OnlyStrings<T> = T extends string ? T : never

type A = OnlyStrings<string | number | boolean | "hello" | 42 | null>;
// → string | "hello"

type B = OnlyStrings<123 | "test" | true | string[]>;
// → "test"
}