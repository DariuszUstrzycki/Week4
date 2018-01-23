/*#### Zadanie 3 - rozwiązywane z wykładowcą

1. W pliku `zadanie03.js` napisz funkcję ```distFromAverage```, która ma przyjmować jako argument tablicę z liczbami.
2. Zwracana przez funkcję tablica ma przedstawiać w każdej komórce różnicę między liczbą z danej komórki a średnią wartością tablicy.  
   Dla uproszczenia możesz użyć funkcji z poprzedniego zadania.  

Np.
```JavaScript
distFromAverage([1,2,3,4,5,6,7]);// => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
distFromAverage([1,1,1,1]);// => [0,0,0,0] (średnia z tablicy wejściowej to 1)
distFromAverage([2,8,3,7]);// => [3,3,2,2] (średnia z tablicy wejściowej to 5)*/

function distFromAverage(array){  
  var ave = getAverage(array);
  
  for(var i = 0; i < array.length; i++){
    array[i] = Math.abs(array[i] - ave);
    
  }  
}


function getAverage(array) {
  var total = add(array);
  return total / array.length;
}



function add(array){

  var total = array[0];
  for(var i = 1; i < array.length; i++ )
    total += array[i];

  return total;
}