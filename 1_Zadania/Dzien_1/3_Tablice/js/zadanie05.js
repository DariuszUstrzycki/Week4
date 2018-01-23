/*#### Zadanie 5

1. W pliku `zadanie05.js` stwórz funkcję ```printTable(array)```, która przyjmuje tylko jeden parametr - tablicę.
2. Przy pomocy pętli `for` przeiteruj (przejdź) po każdym elemencie i wypisz każdy z nich w konsoli.
*/

var fruits = ["apple", "pear", "mango", "kiwi"];

function printTable(array){
  for(var i = 0; i < array.length ; i++){
    console.log(array[i]);
  }  
}

printTable(fruits);