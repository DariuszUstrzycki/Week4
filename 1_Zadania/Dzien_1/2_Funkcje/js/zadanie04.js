/*#### Zadanie 4

1. W pliku `zadanie04.js` stwórz funkcję ```calculateTip(amount, rating)```, która będzie przyjmować dwa argumenty:
* kwotę do zapłaty,
  * opis słowny obsługi.
  2. Jeśli opis jest taki jak zdefiniowano poniżej, funkcja ma zwracać kwotę napiwku,  
    jeśli opis jest nieznany, funkcja powinna zwracać napis `Opis nieczytelny`.

    Opis może przyjmować następujące wartości:
```
"Very good service" => 25% napiwku,
"Good service" => 20% napiwku,
"Neutral service" => 15% napiwku,
"Bad service" => 0% napiwku.
```
Przykład:
```
input -> 100, "Very good service"
output -> 25
```*/

function calculateTip(amount, rating){
  switch(rating){
    case "Very good service":
      return amount * 0.25;
      break;
    case "Good service":
      return amount * 0.25;
      break;
    case "Neutral service":
      return amount * 0.25;
      break;
    case "Bad service":
      return amount * 0.25;
      break;
    default:
      return "Opis nieczytelny";
      
  }
}