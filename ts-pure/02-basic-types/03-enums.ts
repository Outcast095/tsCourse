// Пример 3: Перечисления (Enums) в TypeScript
// =========================================
{
enum Direction { Up, Down }          // → в JS будет ~15–20 строк кода + объект

const enum ConstDirection { Up, Down }  // → в JS просто 0 и 1 вместо ConstDirection.Up

//от обычных и Enum мы отказываемся полностью потому что они конвертируются во что-то очень страшное константный Enum у нас полностью
//исчезают они не хранятся в памяти поэтому им мы отдаем больше приоритет они получаются более оптимизированы

// const enum можно обращаться только через строковый литерал (прямо написанный в коде ключ), а не через переменную, выражение или динамический ключ.
}

 //Oбычный enum
///////////////////////////////////////////////////////////////////
{
enum Direction {
  Up    = 0,
  Down  = 1,
  Left  = 2,
  Right = 3
}

console.log(Direction.Up);     // 0          (forward: имя → значение)
console.log(Direction[0]);     // "Up"       (reverse: значение → имя)
console.log(Direction["Up"]);  // 0
console.log(Direction[Direction.Up]);  // "Up"
}

// 1. Числовые перечисления (Enums)
// По умолчанию enum делает нумерацию своих свойств с 0.
enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}

const move: Direction = Direction.Up;
console.log(move); // 0 

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
// 5. enum передается параметром в функцию 

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

type iConfig = {
    colorRed: Color
    colorBlue: Color
    colorGreen: Color
}

const config: iConfig  = {
    colorRed: Color.Red,
    colorBlue: Color.Blue,
    colorGreen: Color.Green,
};

console.log(config.colorRed);   // "red"
console.log(config.colorBlue);  // "blue"
console.log(config.colorGreen);  // "green"

///////////////////////

const appConfig = {
    theme: {
        colors: Color.Red
    }
};

appConfig.theme.colors; // "red"
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
// enum может итерироваться при помощи циклов иди методов Object.keys Object.values
{
enum Role {
  Admin  = "admin",
  Editor = "editor",
  Viewer = "viewer",
}

console.log(Object.keys(Role));
// → ["Admin", "Editor", "Viewer"]   ← только имена, значения не попадают в ключи

console.log(Object.values(Role));
// → ["admin", "editor", "viewer"]   ← только значения

// Самый удобный способ перебрать
for (const role of Object.values(Role)) {
  console.log(role);  // "admin", "editor", "viewer"
}

// Или с ключами
for (const key of Object.keys(Role)) {
  const value = Role[key as keyof typeof Role];
  console.log(`${key}: ${value}`);
  // Admin: admin
  // Editor: editor
  // ...
}
}

{
   ////////////// enums с typeof 
   
   enum Role {
        Admin  = "admin",
        Editor = "editor",
        Viewer = "viewer",
   }

   type enumType = typeof Role //type enumType = {readonly Admin: Role.Admin; readonly Editor: Role.Editor; readonly Viewer: Role.Viewer;}

   type enumKey = keyof typeof Role //"Admin" | "Editor" | "Viewer"

   // const value: enumType = Role.Editor   //ошибка
   const value: enumKey = "Admin"

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



// const enum имеет определенные ограничения
{
const enum Direction {
  Up    = 0,
  Down  = 1,
  Left  = 2,
  Right = "right"

}

console.log(Direction.Up);     // 0          
//console.log(Direction[0]);     // (запрещено)
console.log(Direction["Up"]);  // 0
//console.log(Direction["right"]);   // (запрещено)
//console.log(Direction[Direction.Up]); // (запрещено)
}


{

    //const enum — итерация невозможна
const enum Color {
  Red   = "red",
  Blue  = "blue",
  Green = "green",
}

// Object.keys(Color) → ошибка компиляции
// Object.values(Color) → ошибка
// for...of Color → ошибка

// Единственный способ — вручную перечислить
const manualColors = [Color.Red, Color.Blue, Color.Green];
}


{
const enum ConstStatus {
  Pending = 0,
  Active  = 1
}

//console.log(ConstStatus[0]);     // Ошибка компиляции!
//console.log(ConstStatus.Active); // → просто 1 в JS, но reverse нет и быть не может
}

{
    const enum colors {
        Red = "red",
        Blue = "blue",
        Green = 'green'
    }


    type IType = {
        carName: string
        carAge: number
        carColor: colors
    }

    const carObj: IType = {
        carName: "BMW",
        carAge: 2005,
        carColor: colors.Green
    }
}