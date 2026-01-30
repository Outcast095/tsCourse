// https://youtu.be/rPaRVcH9big?t=8955

{
    // Пример дженерика с ограничением в функцию можно вставить только дженерик с объектом { value: string }
function logValue<T extends { value: string }>(obj: T): void {
    console.log(obj.value);
}
  
logValue({ value: "Hello" }); // Работает нормально
// logValue({ val: "Hi" }); // Ошибка: Отсутствует свойство 'value'


{
    // Пример дженерика с ограничением в функцию можно вставить только дженерик с кортежем [string, number]
    function getArray<T extends [string, number]>(arr: T): void {
    console.log(arr);
}
    getArray(["hello", 9])

}

{
     // Пример дженерика с ограничением в функцию можно вставить только дженерик с текстом "hello world"
    function getString<T extends "hello world">(str: T): void {
    console.log(str);
}
    getString("hello world")
}

// ------------------------------------------------------------
// Пример универсального класса с типом по умолчанию
class DataHolder<T = string> {
    data: T;

    constructor(data: T) {
        this.data = data;
    }

    getData(): T {
        return this.data;
    }
}

// Пример использования
const stringHolder = new DataHolder("Some string");
console.log(stringHolder.getData()); // Output: Some string

const numberHolder = new DataHolder(123);
console.log(numberHolder.getData()); // Output: 123

// const defaultHolder = new DataHolder();
}



// ------------------------------------------------------------

