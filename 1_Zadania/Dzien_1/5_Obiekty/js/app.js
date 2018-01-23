/*#### Zadanie 1 - rozwiązywane z wykładowcą

1. Za pomocą prototypu dodaj metodę ```upperLower``` do wbudowanego w JavaScript obiektu ```String```.
2. Metoda zamieni podany ciąg znaków tak, że każdy znak nieparzysty w wyrazie będzie zamieniony na mała literę, a parzysty na duża.
3. Jeśli w ciągu występuje spacja, **pomiń ją**.

Po rozwiązaniu zadania pomyśl, czy można funkcję zapisać w inny, łatwiejszy sposób.

```JavaScript
//-> input
var funnyText = "Smiesznie".upperLower();

//output ->
sMiEsZnIe

//-> input
var funnyTextWithSpace = "Javascript jest super".upperLower();

//output ->
jAvAsCrIpT jEsT sUpEr*/


String.prototype.upperLower = function () {
  var newText = "";

  var wordIndex = 0;
  for (var i = 0; i < this.length; i++) {
    
    var letter = this.charAt(i);    
    if(letter == " "){
      newText += " ";      
      wordIndex = 0;
      letter = this.charAt(++i);       
    }

    if (wordIndex % 2 == 0) {
      letter = letter.toLowerCase();
    } else {
      letter = letter.toUpperCase();
    }
    newText += letter;
    wordIndex++;
  }

  return newText; 

}

"Smiesznie".upperLower();
"Javascript jest super".upperLower();
//-----------------------------------------------------------

/*#### Zadanie 2 - rozwiązywane z wykładowcą

1. Stwórz obiekt `Car`, utwórz dla niego odpowiednie atrybuty:
* markę,
  * kolor,
  * liczbę przejechanych kilometrów (na początku `0`).
  2. Oraz metody:
* ```printCarinfo()``` metoda powinna wypisywać informacje o samochodzie (kolor, markę i liczbę przejechanych kilometrów).
  * ```drive(km)```, która dodaje do przejechanych kilometrów podaną wartość.  
  Użyj słowa kluczowego ```this```, żeby odwołać się do obiektu w środku metody.*/

  
  var Car = function(make, color, distance){    
    this.make = make;
    this.color = color;
    this.distance = distance;    
  }
  
  Car.prototype.drive = function(km){
    this.distance += km;    
  }
  
  Car.prototype.printCarInfo = function() {
    console.log(this.make + ", " + this.color + ", " +  this.distance);
  }
  
  var car = new Car("Ford", "black", 0);
car.drive(20);
car.printCarInfo();

//-----------------------------------------------------------

#### Zadanie 3

1. Do obiektu `Car` z zadania 2 dodaj tablicę z listą dat przeglądów (niech będą to zwykłe napisy).  
Dodaj ten nowy atrybut poza ciałem obiektu.
2. Dodaj też następujące metody:
* metodę dodającą wpis do tej tablicy,
  * metodę wyświetlającą wszystkie przeglądy samochodu.  
  Użyj słowa kluczowego ```this```, żeby odwołać się do obiektu w środku metody.
  
  var Car = function(make, color, distance){    
    this.make = make;
    this.color = color;
    this.distance = distance;    
  }

Car.prototype.inspection = [];
Car.prototype.addInspection = function(date){
  this.inspection.push(date);
}

Car.prototype.showInspections = function(){
    for(var i = 0; i < this.inspection.length; i++){
    console.log(this.inspection[i]);
  }
}

var car = new Car("Ford", "black", 0);
car.addInspection("14 Jan 2016");
car.addInspection("22 Dec 2016");
car.showInspections();

//-----------------------------------------------------------

#### Zadanie 5

/*1. Stwórz konstruktor dla obiektów ```Rectangle```, który będzie przyjmować informację na temat długości i szerokości nowo stworzonej figury.
2. Następnie przy pomocy prototypu klasy dodaj do niej następujące metody:
* ```getArea()``` - metoda ma zwracać pole powierzchni,
  * ```getPerimiter()``` - metoda ma zwracać obwód.

  Stwórz kilka obiektów i zobacz, czy metody działają tak jak powinny.*/

  
var Rectangle = function (length, width) {

  if ((typeof length == "number") && (typeof width == "number") &&
    length > 0 && width > 0) {
    this.length = length;
    this.width = width;
  }
}

Rectangle.prototype.getArea = function(){  
  return this.length * this.width;
}

Rectangle.prototype.getPerimiter = function(){  
  return 2 * this.length + 2 * this.width;
}

var rec = new Rectangle(5, 10);
console.log(rec.getArea());  
console.log(rec.getPerimiter()); 
var wrong = new Rectangle("banana", null);
console.log(wrong.getArea());
console.log(wrong.getPerimiter());
console.log(wrong);
console.log(wrong.toString);

//-----------------------------------------------------------

#### Zadanie 6

1. Stwórz konstruktor dla obiektów ```Calculator```.  
Konstruktor ma nie przyjmować żadnych danych.
2. Każdy nowo stworzony obiekt powinien mieć pustą tablicę, w której będzie trzymać historię wywołanych operacji.
3. Następnie przy pomocy prototypu klasy dodaj do niej następujące metody:
1. ```add(num1, num2)``` - metoda ma dodać do siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "added ```num1``` to ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
2. ```multiply(num1, num2)``` - metoda ma pomnożyć przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "multiplied ```num1``` with ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).  
3. ```subtract(num1, num2)``` - metoda ma odjąć od siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "subtracted ```num1``` from ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).  
4. ```divide(num1, num2)``` - metoda ma podzielić przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "divided ```num1``` by ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).  
5. ```printOperations()``` - metoda ma wypisać wszystkie operacje zapamiętane w pamięci.
6. ```clearoperations()``` - metoda ma wyczyścić wszystkie operacje z pamięci.

  **Pamiętaj o używaniu ```this```**.
  
  var Calculator = function() {
    //this.history = [];
  }
 
  Calculator.prototype.history = [];

Calculator.prototype.add = function(num1, num2){
  this.history.push("added " + num1 + " to " + num2 + " got result " + (num1 + num2) );
  console.log(this.history[0]);
  
  return num1 + num2;
}

Calculator.prototype.multiply = function(num1, num2){
  this.history.push("multiplied " + num1 + " by " + num2 + " got result " + (num1 * num2) );
  return num1 * num2;
}

Calculator.prototype.subtract = function(num1, num2){
  this.history.push("subtracted "  + num1 + " minus " + num2 + " got result " + (num1 - num2) );
  return num1 - num2;
}

Calculator.prototype.divide = function(num1, num2){
  this.history.push("divided " + num1 + " by " + num2 + " got result " + (num1 / num2) );
  return num1 / num2;
}

Calculator.prototype.printOperations = function(){
  
  for(var i = 0; i < this.history.length; i++){   
    console.log(this.history[i]);
  }
}

Calculator.prototype.clearoperations = function(num1, num2){
      this.history = undefined;
}

var calc = new Calculator();
console.log(calc.add(9,3));
console.log(calc.subtract(9,3));
console.log(calc.multiply(9,3));
console.log(calc.divide(9,3));
console.log(calc.printOperations(9,3));
console.log(calc.history.length);
console.log(calc.clearoperations(9,3));
console.log(calc.printOperations(9,3));
console.log(calc.history.length);




// ------------------------

var Calculator = function() {
  //this.history = []; tak nie
}

Calculator.prototype.history = [];
var calc = new Calculator();
calc.history.length; // tak nie: calc.this.history.length < tak sie siega po property

this.history.push("added "); // dodawanie

//PRINT ELEMENTS:
// oba ok:
console.log(this.history[i]);
console.log(this.history[i].toString());
// console.log(history[i]);  wrong: undefined

// console.log(history[i].toString); cannot read property toString - wrong 

// czyszczenie arrayu:
this.history = []; // tak jest ok, bo da size 0
// tak nie:
//this.history = null; >>Error da dla calc.history.length/undefoned : "cannot read property 'length' of null/undefined"

























































































































