/
function jeden() {

    //zmianna1 ma scope jeden()
    var zmienna1 = 1;

    //zmenne w dwa() maja dostep do zmiennych w jeden()
    function dwa() { // is the inner function, a closure

      //zmienna1 jest widoczna w zagnizdzonej funkcji 
      /*This is an example of lexical scoping, which describes how a parser resolves variable names when functions are nested. The word "lexical" refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Nested functions have access to variables declared in their outer scope.*/
        console.log(zmienna1);

        //zmienna2 ma scope dwa()
        var zmienna2 = 3;
    }

    //Twój komentarz ...
    dwa();

  //Brak dostępu do zagnieźdzonej zmienna2 - Uncaught ReferenceError: zmienna2 is not defined
   console.log(zmienna2)
}

//Twój komentarz ...
jeden()