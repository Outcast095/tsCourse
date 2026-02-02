//https://youtu.be/rPaRVcH9big?t=4297

// Типизация функций в TypeScript
// ======================================

// 1. Базовая типизация функции
function greet(name: string): string {
    return `Привет, ${name}!`;
}

// 2. Функция без возвращаемого значения тип void 
function logMessage(message: string): void {
    console.log(message);
}

// 3. Функция с несколькими параметрами
function calculateSum(a: number, b: number): number {
    return a + b;
}

// 4. Функция с параметрами по умолчанию
function createGreeting(name: string, greeting: string = "Привет"): string {
    return `${greeting}, ${name}!`;
}

// 5. Функция с остаточными параметрами
function sumAll(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

// 6. Стрелочные функции с типизацией
const multiply = (a: number, b: number): number => a * b;


// Примеры использования
console.log(greet("Иван")); // Привет, Иван!
logMessage("Сообщение в консоль");
console.log(calculateSum(5, 3)); // 8
console.log(createGreeting("Мария")); // Привет, Мария!
console.log(createGreeting("Алексей", "Здравствуй")); // Здравствуй, Алексей!
console.log(sumAll(1, 2, 3, 4, 5)); // 15
console.log(multiply(4, 5)); // 20

// перегрузка функции 
// типизация функции которая делает запрос разных праметров на сервер 
// ======================================
type Itrack = {
    id: string,
    trackName: string
}

type Iplaylist = {
    id: string,
    playlistName: string
}

type iartist = {
    id: string,
    artistName: string
}

function spotifyApi(enpoint: "track", id: string): Promise<Itrack>
function spotifyApi(enpoint: "playlist", id: string): Promise<Iplaylist>
function spotifyApi(enpoint: "artist", id: string): Promise<iartist>
function spotifyApi(enpoint: string, id: string): Promise<unknown> {
    return fetch(`https//api.spotify.com/v1/${enpoint}s/${id}`).then((res) => res.json())
}

const track = spotifyApi('track', "123456")
const playlist = spotifyApi('playlist', "123456")
const artist = spotifyApi('artist', "123456")




// ======================================
// функция на вход принимает объект и возвращает строку 

function renderUser (user: {name: string, age: number}): string {
    return `${user.name}, ${user.age}`
}

// ======================================
// функция на вход принимает объект и возвращает строку второй вариант с типом  

type Iuser = {
    name: string,
    age: number
}

function renderUser2 (user: Iuser): string {
    return `${user.name}, ${user.age}`
}


// ======================================
// функция на вход принимает объект и возвращает строку третий вариант с интерфейсом  

interface Iuser2  {
    name: string,
    age: number
}

function renderUser3 (user: Iuser2): string {
    return `${user.name}, ${user.age}`
}