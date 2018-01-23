/*#### Zadanie 7

1. W pliku `zadanie07.js` stwórz funkcję ```getMissingElement```, która ma przyjmować tylko jeden argument - tablicę zawierającą rosnące liczby całkowite.
2. Funkcja ta ma zwracać brakującą liczbę (czyli miejsca, w którym tablica skacze o dwa zamiast o jeden).
3. Jeżeli w tablicy nie ma brakujących liczb, to funkcja ma zwracać ```null```.
```JavaScript
getMissingElement([1,2,3,4,5,6,7]);// => null
getMissingElement([6,7,8,10,11,12,13,14,15]);// => 9
getMissingElement([-4,-3,-2,0,1,2,3,4]);// => -1*/

function getMissingElement(array){
      
  for(var i = 0; i < array.length - 1; i++){
    if(array[i] + 1 != array[i+1])
      return (array[i] + 1);
  }
  
  return null;
  
}

getMissingElement([1,2,3,4,5,6,7]);// => null
getMissingElement([6,7,8,10,11,12,13,14,15]);// => 9
getMissingElement([-4,-3,-2,0,1,2,3,4]);// => -1*/
