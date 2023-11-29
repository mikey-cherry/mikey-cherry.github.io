// Pod każdym punktem dodaj swoje rozwiązanie, w tym celu stwórz plik sprint3zadanie.js

// 1. Zadania ze Zmiennych

// a) Zadeklaruj zmienną typu number i przypisz do niej dowolną liczbę całkowitą.
let Integer = 123;
console.log("1.a) " + Integer);

// b) Utwórz zmienną typu string przechowującą twoje imię.
let Name = "Michał";
console.log("1.b) " + Name);

// c) Zainicjalizuj zmienną bez wartości, a następnie przypisz do niej dowolny tekst.
let noValue;
noValue = "siema";
console.log("1.c) " + noValue);

// d) Stwórz zmienną const i przypisz do niej obiekt z dwoma kluczami: name (string) i age (number).
const twoKeys = { name: "Michał", age: 38 };
console.log("1.d) " + twoKeys.name + " " + twoKeys.age);

// e) Zadeklaruj dwie zmienne: jedną używając let, drugą const i przypisz do nich wartości logiczne.
let logicOne = true;
const logicTwo = false;
console.log("1.e) " + logicOne + " " + logicTwo);

// f) Stwórz zmienną, która będzie przechowywać sumę dwóch liczb.
let sum = 1 + 2;
console.log("1.f) " + sum);

// g) Utwórz zmienną przechowującą twoje pełne imię i nazwisko jako jedną wartość typu string.
let fullName = "Michał Wiśniewski";
console.log("1.g) " + fullName);

// h) Zainicjalizuj zmienną z liczbą zmiennoprzecinkową.
let floatingPointNumber = 3.14159;
console.log("1.h) " + floatingPointNumber);

// i) Zadeklaruj zmienną i przypisz do niej wynik działania matematycznego (np. dodawanie).
let addition = 1 + 2;
console.log("1.i) " + addition);

// j) Stwórz zmienną przechowującą twoje miasto jako ciąg znaków.
let city = "Szczecin";
console.log("1.j) " + city);

// 2. Zadania z Prostych i Złożonych Typów Danych

// a) Utwórz tablicę zawierającą trzy różne typy danych.
let tableData = ["siema", "007", true];
console.log("2.a) " + tableData);

// b) Stwórz obiekt car z właściwościami make, model i year.
let car = {
  make: "VW",
  model: "Golf",
  year: 2017,
};
console.log("2.b) " + car.make + " " + car.model + " " + car.year);

// c) Zadeklaruj tablicę z trzema różnymi wartościami liczbowymi.
let tableNumbers = [1, 2, 3];
console.log("2.c) " + tableNumbers);

// d) Utwórz obiekt reprezentujący osobę, zawierający klucze name, age i isStudent (boolean).
let person = {
  name: "Michał",
  age: 38,
  isStudent: true,
};
console.log("2.d) " + person.name + " " + person.age + " " + person.isStudent);

// e) Zadeklaruj zmienną przechowującą pusty obiekt, a następnie dodaj do niego klucz color z wartością typu string.
let emptyObject = {};
emptyObject.color = "green";
console.log("2.e) " + emptyObject.color);

// f) Stwórz tablicę obiektów, gdzie każdy obiekt reprezentuje zwierzę z kluczami name (string) i age (number).
let tableAnimals = [
  { name: "lion", age: 10 },
  { name: "tiger", age: 20 },
];
console.log(
  "2.f) " +
    tableAnimals[0].name +
    " " +
    tableAnimals[0].age +
    " " +
    tableAnimals[1].name +
    " " +
    tableAnimals[1].age
);

// g) Utwórz zmienną przechowującą tablicę z różnymi wartościami boolean.
let tableBoolean = [true, false];
console.log("2.g) " + tableBoolean);

// h) Stwórz obiekt student z kluczami name (string), grades (tablica liczb) i isActive (boolean).
let student = {
  name: "Michał",
  grades: [4, 5, 6],
  isActive: true,
};
console.log(
  "2.h) " + student.name + " " + student.grades + " " + student.isActive
);

// i) Zadeklaruj tablicę zawierającą różne typy danych, w tym co najmniej jeden obiekt.
let tableDifferentData = [true, "007", { name: "James Bond" }];
console.log(
  "2.i) " +
    tableDifferentData[0] +
    " " +
    tableDifferentData[1] +
    " " +
    tableDifferentData[2].name
);

// j) Utwórz obiekt reprezentujący książkę z kluczami title, author i yearPublished.
let book = {
  title: "Catch-22",
  author: "Joseph Heller",
};
console.log("2.j) " + book.title + " " + book.author);

// 3. Zadania z Warunków i Operatorów Trójargumentowych

// a) Napisz warunek if, który sprawdzi, czy zmienna typu number jest większa od 10.
let number = 11;
if (number > 10) {
  console.log("3.a) number > 10");
}

// b) Stwórz warunek if, który sprawdzi, czy zmienna tekstowa jest równa "Hello".
let text = "Hello";
if (text === "Hello") {
  console.log("3.b) text = Hello");
}

// c) Użyj operatora ternarnego do przypisania do zmiennej wartości w zależności od innego warunku logicznego.
let ternary = "yellow" ? "3.c) yellow" : "blue";
console.log(ternary);

// d) Napisz warunek, który sprawdzi, czy zmienna age jest większa lub równa 18.
let age = 20;
let adult = age >= 18 ? "3.d) adult" : "3.d) kid";
console.log(adult);

// e) Stwórz warunek if-else, który sprawdzi, czy tablica jest pusta.
let emptyTable = [];
if (emptyTable.length === 0) {
  console.log("3.e) empty");
} else {
  console.log("3.e) not empty");
}

// f) Użyj operatora ternarnego do sprawdzenia, czy zmienna isMember jest prawdziwa, i na tej podstawie przypisz rabat.
let isMember = true;
let discount = isMember ? "3.f) discount" : "3.f) no discount";
console.log(discount);

// g) Napisz warunek if, który sprawdzi, czy długość ciągu znaków w zmiennej jest większa niż 5.
let string = "JavaScriptIsFun";
if (string.length > 5) {
  console.log("3.g) string length > 5");
}

// h) Stwórz warunek if-else, który sprawdzi, czy liczba jest parzysta lub nieparzysta.
let evenNumber = 666;
if (evenNumber % 2 === 0) {
  console.log("3.h) even number");
} else {
  console.log("3.h) odd number");
}

// i) Użyj operatora ternarnego do wyboru między dwoma różnymi wartościami tekstowymi w zależności od warunku.
let twoTernary = 1 > 0 ? "3.i) true" : "3.i) false";
console.log(twoTernary);

// j) Napisz warunek if, który sprawdzi, czy obiekt ma określony klucz.
let house = { pin: "1234" };
if (house.pin) {
  console.log("3.j) pin ok");
} else {
  console.log("3.j) no pin");
}
