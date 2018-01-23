/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function () {
  var homeElement = document.getElementById("home");
  var childElements = document.querySelector(".oferts").children; // HTMLCollection
  var banner = document.querySelector(".ban");
  var blocks = document.querySelectorAll(".block");
  var links = document.querySelector(".links").children;

  
  
  
  
  
  

  function zadanie7() {
  /*#### Zadanie 7

  1. Wypisz w konsoli wartość atrybutów ```classList``` i ```className``` dla zmiennej ```banner```.
  2. Wypisz w konsoli, jakiego typu są te wartości.
*/
  
  console.log(banner.classList); // array
  console.log(banner.className); // ban article
  }
  
  
  
  
  function zadanie6() {
  //#### Zadanie 6
  
  Array.from(links).forEach( function(entry){
    console.log(entry.dataset);
    
  });
  
  }
  
  
  
  

  function zadanie4() {

    var homeElement = document.getElementById("home");
    console.log("Id of homeElement is " + homeElement.id);

  }




  function zadanie3() {

    // #### Zadanie 3

    console.log("Outer HTML also includes the selected element's tag's html:\n\n");

    Array.from(blocks).forEach(function (entry) {

      console.log("Blocks inner: " + entry.innerHTML);
      console.log("Blocks outer: \n" + entry.outerHTML);

    });


  }

  function zadanie2() {

    // Zadanie 1 - rozwiązywane z wykładowcą

    homeElement.id = "homeHeader";
    homeElement.className = "home"; // NOTE: to nie jest class tylko className!!! 

    // NOTE: global attributes cant be accessed with dataset as it stores only custom attributes (data-*...)!

    // this works too:
    //homeElement.setAttribute("id", "homeHeader" );
    //.setAttribute("class", "home" );


  }



  function zadanie2() {

    // #### Zadanie 2 - rozwiązywane z wykładowcą

    //NOTE: szukajac typu zmiennej, uzyj .tag
    console.log("homeElement is of type " + homeElement.tagName);
    console.log("banner is of type " + banner.tagName);

    //collections/arrays/list:  

    //var 1
    // If you're using an environment that supports the Array features of ECMAScript 5 ("ES5"), the version most broadly supported at the moment
    // childElements from querySelector(".oferts").children is not an array. It is HTMLCollection (generic type), which doesnt have a for each loop
    console.log("Iteration with for each loop. Child elements of .offers(div) are: ");
    Array.from(childElements).forEach(function (entry) {
      console.log(entry.tagName);
    }); // NOTE: this is an anonymous function

    // var 2
    var index;
    for (index = 0; index < childElements.length; ++index) {
      console.log("The same but with an old loop: " + childElements[index].tagName);
    }

    // NodeList
    Array.from(blocks).forEach(function (entry) {
      console.log("NodeList turned array with foreach loop. Blocks are " + entry.tagName);
    });

    Array.from(links).forEach(function (entry) {

      console.log("NodeList turned array with foreach loop. Links(<ul>)'children are " + entry.tagName);

    });



  }





});