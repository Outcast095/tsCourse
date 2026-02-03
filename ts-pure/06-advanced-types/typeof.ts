

{
    const user = {
        name: "Alex",
        age: 30,
    };

    type User = typeof user; // 

/*
    теперь User равен такому типу

        type User = {
            name: string;
            age: number;
        };
*/

    const UserType = typeof user


}



{
    let value: number = 34 

    type valueType = typeof value //number

    const value2: valueType = 44
}



{
    let array: number[] = [34, 44, 55] 

    type typeArray = typeof array // number[] 

    let array2: typeArray = [55, 88, 456, 56] 
}



{
    let str = "hello world"

    type strType = typeof str // string 

    let str2: strType = "hello Magomed"
}

{
    const roles = ["admin", "user", "guest"] as const;

    type Role = typeof roles[number]; // "admin" | "user" | "guest"
}

{
    const emptyArray = [] 

    type emptyArrayType = typeof emptyArray
}


