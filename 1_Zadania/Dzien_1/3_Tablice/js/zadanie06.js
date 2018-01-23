### Zadanie 6

1. W pliku `zadanie06.js` stwórz funkcję ```factors```, która ma przyjmować tylko jeden argument - liczbę, która musi być większa od `0`.
2. Funkcja ta ma zwracać tablicę zawierającą wszystkie dzielniki podanej liczby (w kolejności malejącej).
3. Jeżeli liczba jest mniejsza lub równa `0`, to funkcja ma zwracać pustą tablicę.

```JavaScript
factors(2);// => [2, 1]
factors(54);// => [54, 27, 18, 9, 6, 3, 2, 1]
factors(-4);// => []
```

function factors(num){
  
  if(num <= 0)
    return [];
  
  var dividors = [];
    
  for(var i = num; i > 0; i--){   // num=2  i=0
    
      debugger;
    if(num % i == 0){  // 2%2=0
      debugger;
      dividors.push(i);
    }
    
  }
  
  
  
  console.log(dividors);
  
}
factors(1);// => [ 1]
factors(2);// => [2, 1]
factors(54);// => [54, 27, 18, 9, 6, 3, 2, 1]
factors(-4);// => []
```