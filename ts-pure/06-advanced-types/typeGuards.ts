


{

    //Type guard — это проверка, которая позволяет TypeScript сузить тип переменной в конкретной ветке кода.

    /*
    когда использовать type guard 
    1) когда нужно убедиться что значения из сторонних источников является определенного типа  
    2) когда нужно сузить тип какого то значения (number | undefined => number)
    */

    function print(value: string | number) {
        // TS не знает, что делать
        //value.toUpperCase(); // ❌ ошибка
    }

    {
    function print(value: string | number) {
        if (typeof value === "string") { //typeof это type guard 
        value.toUpperCase(); // ✅
    }
    }
}
}


{
    function log(value: string | number | boolean) {
        if (typeof value === "string") { //typeof это type guard 
            console.log(value.toUpperCase());
    } else if (typeof value === "number") { //typeof это type guard 
            console.log(value.toFixed(2));
    } else {
            console.log(value ? "true" : "false");
    }
    }
}

/////////////
//typeguard это runtime проверка которая гарантирует что значение всега будет определенного типа 

{
    function test (value: unknown) {
        if (typeof value === "string") { //typeof это type guard 
            value //value: string
        } else {
            value //value: unknown
        }
    }
}

////// 
//typeguard in react component 


{
    interface samecomponentProps {
        text?: string
    }


    const someComponent = (props: samecomponentProps) => {

        if(typeof props.text === "undefined") { ///typeguard
            return null
        }

        const text = props.text //text: string

        /*
            return (        
                <p>
                    Here is the text <br/>
                    {text}
                </p>
            )
        */
    }
}


/////////
//typeguard width localStorage 

{
    const getSavedName = () => {
        const name = localStorage.getItem("name") //name: string | null

        if (name === null) {
            return
        }

        name 

        const parsedName = JSON.parse(name) //parsedName: any

        if (typeof  parsedName !== "string") { 
            return
        }

        return parsedName // parsedName: string
    }
}


/////////
//встроенные type guard 

// typeof 
// if else
// value !== undefined && value !== null

////if else https://youtu.be/xsyykEdOQ7E?t=456
{
    function test2 (value: unknown) {
        if(value) {
            value //value: {} т.е. не null и не undefined 
        } else {
            value //value: unknown
        }
    }
}

/////value !== undefined && value !== null // https://youtu.be/xsyykEdOQ7E?t=548
{
    function test3 (value: unknown) {
        if(value !== undefined && value !== null) { 
            value //value: {} т.е. не null и не undefined 
        } else {
            value //value: unknown
        }
    }
}

///// in // https://youtu.be/xsyykEdOQ7E?t=594

{
    function test3 (value: object) {
        if("key" in value) { 
            value //value: object & Record<"key", unknown> 
        } else {
            value //value: object
        }
    }
}


///// кастомные type guard 
// создание функций typeguards 

{
    //////////////////неверный вариант

    function isString (value: unknown)  {
        return typeof value === "string"
    }

    function test4 (value: object) {
        if(isString(value)) {  // type guard работает не корректно !!! 
            value //value: never  
        } else {
            value //value: object
        }
    }

    ////////////////////правильный вариант 

        function isString2 (value: unknown): value is string { 
            // value is string означает что если функция вернет true то проверка на значение string прошла успешно 
        return typeof value === "string"
    }

    function test5 (value: unknown) {
        if(isString2(value)) {  // type guard работает  корректно !!! 
            value //value: string  
        } else {
            value //value: object
        }
    }
}


/// type assertions // https://youtu.be/xsyykEdOQ7E?t=1041

{

    //type assertions это аналог type guards отличие их в том что type guards возвращают true или false 
    // а type assertions вывкидывает ошибку если передан тип с неверными данными 

    function assertStrings (value: unknown): asserts value is string {
        if (typeof value !== "string" ) {
            throw new Error("value must be string")
        }
    }

    function connectToDo (value: unknown) {
        assertStrings(value)
        value  //value: string
    }

    connectToDo('dfsdfsdf')
}

{
    interface Options {
        a: number
        b: string
    }

    function assertOptions (value: unknown): asserts value is Options {
        if(value === null || typeof value !== "object") {
            throw new Error("options must be Object")
        }

        if(!("a" in value) || typeof value.a !== "number") {
            throw new Error("options.a must be number")
        }

        if(!("b" in value) || typeof value.b !== "string") {
            throw new Error("options.b must be string")
        }
    }

    function doSomething (value: unknown) {
        assertOptions(value)

        value //value: Options ts точно знает что value Options потому что он прошел проверку в  assertOptions
    }
}


//// instanceof 
// instanceof отвечает только на один вопрос:
// «Этот объект был создан через new ЭТОТ_КЛАСС?»
// ВСЁ. Ничего больше. 

{
    class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const u = new User("Alex");

u instanceof User // true


function handle(person: User | string) {
  if (person instanceof User) {
    // TS думает так:
    // "Ага, это User"
    console.log(person.name);
  }
}

//Внутри if TypeScript УВЕРЕН, что person экземляр класса' User.
}