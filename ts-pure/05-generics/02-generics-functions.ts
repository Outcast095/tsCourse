//https://youtu.be/rPaRVcH9big?t=8560

{
    // Generic Functions (Универсальные функции)

/* 
Дженерик позволяет вам написать функцию, которая может работать с разными типами 
без необходимости писать отдельные функции для каждого типа.

Параметры типа указываются с помощью угловых скобок <T> после имени функции.
*/

// Преимущества универсальных типов:

// 1. Code Reusability:  Возможность повторного использования кода.
// 2. Type Safety:  Дженерики обеспечивают проверку типов во время компиляции, предотвращая ошибки во время выполнения.
// 3. Flexibility:  Работа с различными типами данных.
// 4. Readability:  Дженерики часто чище и проще для понимания по сравнению с использованием `any`.

// Универсальная функция, которая возвращает первый элемент массива
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

// const getFirstElement = <T>(arr: T[]): T => {
//     return arr[0];
// }

// Использование универсальной функции с разными типами
const numbersArray: number[] = [1, 2, 3];
const firstNumber = getFirstElement(numbersArray); // firstNumber имеет тип "число" (inferred)
console.log(firstNumber); // Output: 1

const strings: string[] = ["hello", "world"];
const firstString = getFirstElement(strings); // firstString имеет тип "строка" (inferred)
console.log(firstString); // Output: "hello"

// ------------------------------------------------------------
// Универсальные классы позволяют создавать экземпляры, которые могут работать с разными типами.
// Параметры типа указываются с помощью угловых скобок <T> после имени класса.

// Универсальный класс, который хранит значение определенного типа
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const numberBox = new Box<number>(10);
console.log(numberBox.getValue()); // Output: 10

const stringBox = new Box<string>("Typescript");
console.log(stringBox.getValue()); // Output: "Typescript"

// ------------------------------------------------------------
}

{
    //Несколько дженериков

function merge<T, U>(a: T, b: U) {
  return { ...a, ...b };
}

const result = merge(
  { name: "Alex" },
  { age: 25 }
);

// result:
// {
//   name: string;
//   age: number;
// }
} 


{
    // Один параметр типа
function identity<T>(value: T): T {
    return value;
}
const result1 = identity<string>("Hello"); // явно указали тип
const result2 = identity(42); // тип number вывелся автоматически

// Несколько параметров типа
function mapArray<T, U>(arr: T[], transform: (item: T) => U): U[] {
    return arr.map(transform);
}
const numbers = [1, 2, 3];
const strings = mapArray(numbers, (num) => `Number: ${num}`);
// T = number, U = string
}