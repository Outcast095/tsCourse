

{
    //TypeScript не разрешает приводить типы напрямую, если они слишком разные.

    const value: string = "hello";

    // const num = value as number; // ❌ Conversion of type 'string' to type 'number' may be a mistake

    const num: number = value as unknown as number;

    console.log(num + 1);  // "hello1" 🤡
} 

{   
    type IRole = "admin" | "user" 

    type iData = {
        id: number,
        name: string,
        role: IRole
    }

    type badLibraryType = {
       getData: ()=> iData
    }

    const badLibrary = {
        getData() {
            return {id: 'Heraks', name: "Alex", role: "admin"} // id приходит как string
        }
    }
    
    // в данном коде из метода getData приходит объект со свойством id string, 
    // но в переменная data имеет типизацию как iData и мы говорим typescript я знаю лучше чем ты, id не string a number


    const data: iData = badLibrary.getData() as unknown as iData  // если убрать то будет ошибка 
    console.log(data); // { id: 1, name: "Alex", role: "admin" }
    
}

/*
    📛 Это официально считается BAD PRACTICE
    Документация TypeScript прямо говорит:
    ❌ Avoid double assertions (as unknown as T)
    Использовать можно только если ты на 100% уверен, что данные валидны.
*/
