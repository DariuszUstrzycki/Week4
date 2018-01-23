/*### Zadanie 8 - dodatkowe

1. W pliku `zadanie08.js` stwórz tablicę zawierającą w w każdej komórce rok urodzenia.
2. Następnie napisz funkcję, która przyjmie tę tablicę jako argument i wyświetli:
   * rok urodzenia najstarszej osoby i jej wiek,
   * rok urodzenia najmłodszej osoby i jej wiek.
   Użyj pętli do iteracji tablicy, ale postaraj się pobierać elementy metodą ```pop``` lub ```shift```.
*/

var years = [ 1967, 1945, 2014, 2002, 1999];
processYears(years);

function processYears(arr){
  
  var oldest = arr[0];
  var youngest = arr[0];
  
  while(arr.length >0){
    var year = arr.shift(); 
    
    if(year < oldest)
      oldest = year;
    
    if(year > youngest)
      youngest = year;
        
  }
  
  console.log(oldest);
  console.log(youngest);
  
}