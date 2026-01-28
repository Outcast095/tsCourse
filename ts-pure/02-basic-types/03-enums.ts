// Пример 3: Перечисления (Enums) в TypeScript
// =========================================

// 1. Числовые перечисления (Enums)
// По умолчанию enum делает нумерацию своих свойств с 0.
enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}

const move: Direction = Direction.Up;
console.log(move);

// 2. Строковые перечисления (Enums)
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

const favoriteColor: Color = Color.Blue
console.log(favoriteColor); 

// 3. Перечисления с пользовательскими значениями
enum ResponseCode {
    OK = 200,
    NotFound = 404,
    ServerError = 500
}

const responseCode: ResponseCode = ResponseCode.NotFound;
console.log(responseCode);

// 4. Гетерогенные перечисления (смешанные типы)
enum MixedEnum {
    No = 0,
    Yes = "YES"
}


console.log(Direction[0]); // Выведет: "Up"
console.log(Direction[Direction.Up]); // Выведет: "Up"

// Примеры ошибок
// let wrongDirection: Direction = 5;
// let wrongColor: Color = "YELLOW"; // Ошибка: "YELLOW" не является допустимым значением Color 


////////////////////////////////////////////////////////////////
//enum передается параметром в функцию 

{
enum Color {
    Red = "red",
    Blue = "blue",
    Green = "green",
    Black = "black"
}

const getColor = (color: Color): string => {
    return color;
}

getColor(Color.Red);   // "red"
getColor(Color.Black); // "black"
}

////////////////////////////////////////////////////////////////
//enum передается в объект
{
enum Color {
    Red = "red",
    Blue = "blue",
    Green = "green"
}

const config = {
    colors: Color
};

console.log(config.colors.Red);   // "red"
console.log(config.colors.Blue);  // "blue"

///////////////////////

const appConfig = {
    theme: {
        colors: Color
    }
};

appConfig.theme.colors.Red; // "red"
}


////////////////////////////////////////////////////////////////
//enum в swich case 


enum Status {
    Pending = "pending",
    Success = "success",
    Error = "error"
}

function getStatusMessage(status: Status) {
    switch (status) {
        case Status.Pending:
            return "Загрузка...";
        case Status.Success:
            return "Успешно";
        case Status.Error:
            return "Ошибка";
    }
}

////////////////////////////////////////////////////////////////
//enum в if else
{
enum Status {
    Pending = "pending",
    Success = "success",
    Error = "error"
}

function handleStatus(status: Status) {
    if (status === Status.Pending) {
        console.log("Загрузка...");
    } 
    else if (status === Status.Success) {
        console.log("Успешно выполнено ✅");
    } 
    else if (status === Status.Error) {
        console.log("Произошла ошибка ❌");
    }
}
}


////////////////////////////////////////////////////////////////
//enum в if else

{
    enum Role {
    Admin = "admin",
    User = "user",
    Guest = "guest"
}

function canDelete(role: Role) {
    return role === Role.Admin;
}

canDelete(Role.Admin) // true
canDelete(Role.User) // false
canDelete(Role.Guest) // false
}


////////////////////////////////////////////////////////////////
//Enum + объект-словарь

{
    enum Language {
    EN = "en",
    RU = "ru",
    DE = "de"
}

const dictionary: Record<Language, string> = {
    [Language.EN]: "Hello",
    [Language.RU]: "Привет",
    [Language.DE]: "Hallo"
};

console.log(dictionary[Language.EN]); // Hello
console.log(dictionary[Language.RU]); // Привет
console.log(dictionary[Language.DE]); // Hallo 
}

////////////////////////////////////////////////////////////////
//as const

{
    const dictionary = {
    en: "Hello",
    ru: "Привет",
    de: "Hallo"
} as const;

dictionary.en; // ✅  Hello
}
