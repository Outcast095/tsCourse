//https://youtu.be/rPaRVcH9big?t=5237

// Интерфейсы и типы в TypeScript
// =================================
{
// Интерфейсы и Типы определяют структуру объекта и могут включать свойства, методы и индексы.

// Интерфейс для описания структуры объекта пользователя
interface IUserInterface {
    name: string;
    age: number;
    email: string;
    // greet(): string;
    greet: () => string;
}

// Реализация интерфейса
const user1: IUserInterface = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(user1.greet()); // Hello, my name is Alice


////////////////////////////////////////////////////////////////////////
//////////////////////// метод принимает параметр text с типом стринг 

interface ISecondInterface {
    greet: (text: string) => string;
}

const sayHello: ISecondInterface = {
    greet(text) {
        return `Hello, my name is ${text}`;
    }
}

sayHello.greet("Magomed")



////////////////////////////////////////////////////////////////////////
//////////////////////// метод принимает параметр object с типом 

interface paramObject {
    value: number
} 


interface IThirdInterface {
    getNum: (obj: paramObject) => number;
}


const GetNum: IThirdInterface = {
    getNum(obj) {
        return obj.value;
    }
}

GetNum.getNum({value: 56})

// Тип для описания структуры объекта пользователя
type UserType = {
    name: string;
    age: number;
    email: string;
    greet: () => string;
};

// Реализация типа
const user2: UserType = {
    name: "Nik",
    age: 25,
    email: "nik@example.com",
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(user2.greet()); // Hello, my name is Nik

// ====================================================
// Различия между интерфейсами и типами:
// 1. Интерфейсы могут расширяться друг от друга или от классов, а типы могут объединяться с помощью оператора &.
// 2. Интерфейсы более предпочтительны для описания структуры объектов, а типы более универсальны и могут описывать объединения, пересечения и примитивы.
// 3. Интерфейсы могут быть повторно открыты для добавления новых свойств, а типы — нет.
// 4. несколько интерфейсов с одинаковым именем суммируются.
// 5. интерфейсы не могут иметь возможность расширяться при помощи инструмента |.
// ====================================================
interface IExtendedUserInterface extends IUserInterface {
    role: string;
}
// interface ExtendedUserInterface {
//     role: string;
//     role2: string;
// }

const user3: IExtendedUserInterface = {
    name: "Alex",
    age: 28,
    email: "alex@example.com",
    role: "admin",
    // role2: "barmen",
    greet() {
        return `Hello, my name is ${this.name} and I am an ${this.role}`;
    }
};

console.log(user3.greet()); // Hello, my name is Alex and I am an admin

}


// 4. несколько интерфейсов с одинаковым именем суммируются.
// ====================================================
{
interface iInterface {
    name: string
}

interface iInterface {
    age: number
}

const user: iInterface = {
    name: "Nikolay",
    age: 36
}

// два интерфейса объеденинены в один 
}


// 5. интерфейсы не могут иметь возможность расширяться при помощи инструмента |
// ====================================================

{
    type firstTipe = {
        name: string
    }

    type secondType = {
        age: number
    }

     //interface unionType = firstTipe | secondType  // ❌ Syntax error



    interface iInterface {
    age: number | string // ✅ это можно
    }

    const user: iInterface = {
    age: 36 
    }


    //interface может быть частью union

    interface Success {
        status: "success";
        data: string;
    }
       
    interface Error {
        status: "error";
        error: string;
    }

    type Response = Success | Error; // ✅ это можно
}