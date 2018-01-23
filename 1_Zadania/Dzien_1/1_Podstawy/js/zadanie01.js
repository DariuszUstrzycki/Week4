function mathInfo() {
  var randomNumber = Math.floor(Math.random() * 100);

  if( randomNumber % 2 == 0)
    console.log(randomNumber + " is  even");
  else
    console.log(randomNumber + " is odd");

  console.log("It's devided by ");

  var dividors = [];

  for(var i = randomNumber; i > 0; i--){

    var left = randomNumber % i;
    if(left == 0){
      console.log( i + ", ");
      dividors.push(i);
    }
  }

  var power = randomNumber % 5;
  console.log(randomNumber + " % " + 5 + " = "  + power + "");
  var result = Math.pow(randomNumber, power);
  console.log( randomNumber + " ^ " + power + " = " +  result) 
  console.log(dividors);
}

//to wywołanie ma spowodować wyświetlenie w konsoli informacji z zadania
mathInfo();


/*Dopisz kod, który wyświetli następujące informacje w konsoli:

	Czy liczba jest parzysta czy nieparzysta.
	Wszystkie dzielniki liczby, np. dla 10 wyświetli 5, 2, 1 (liczby mają wyświetlić się w jednej linii).
	Wyświetli wynik potęgowania liczby, wykładnikiem potęgi ma być reszta z dzielenia tej liczby przez 5.
	**Przykład dla polecenia 3.**:
	Wylosowana liczba: 8
	8 % 5 = 3
	8^3 = 512*/