/*#### Zadanie 2 - rozwiązywane z wykładowcą

1. W pliku `zadanie02.js` napisz dwie funkcje ```add(array)``` i ```multiply(array)```
2. Obie mają przyjmować tylko jeden argument - tablicę.
3. Funkcja ```add``` ma zsumować wszystkie liczby znajdujące się w tej tablicy (przy pomocy pętli `for`)
4. Funkcja ```multiply``` ma pomnożyć wszystkie liczby znajdujące się w tablicy (przy pomocy pętli `for`).*/

function add(array){

  var total = array[0];
  for(var i = 1; i < array.length; i++ )
    total += array[i];

  return total;
}

console.log( add([1]));
console.log( add([0]));
console.log( add([0, 2, 3, 4]));


function multiply(array){
  
  var total = array[0];
  for(var i = 1; i < array.length; i++ )
    total *= array[i];

  return total;

}

console.log( multiply([1]));
console.log( multiply([0]));
console.log( multiply([1, 2, 3, 4]));