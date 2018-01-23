//Co oznaca poniższy kod dowiecie się w dalszej części modułu
document.addEventListener("DOMContentLoaded", function(){
    
  /*#### Zadanie 1 - rozwiązywane z wykładowcą*/
  var firstArticle = document.querySelector("article.first");
  console.log("This is article.first:");
  console.log(firstArticle);
  
  var h1Tags = document.querySelectorAll("article.first h1");
  console.log("Number of h1 in article.first: " + h1Tags.length); // 0
  
  
  
  var divs = document.querySelectorAll("article.first div");
  console.log("Number of divs in article.first: " + divs.length);
  for( var i = 0; i < divs.length; i++){    
    console.log(divs[i]);
  }
  
  /*#### Zadanie 2 - rozwiązywane z wykładowcą*/
  
  var ex2 = document.querySelector("nav ul li:nth-of-type(5) a");
  console.log("This is id=exercise2: ");
  console.log(ex2);
 
  /*#### Zadanie 3*/

  var home1 = document.querySelector("#home");
  var home2 = document.getElementsByTagName("header");
  
  var _first_li_not_datadir = document.querySelector("li:not([data-direction])");
    
  var first_block = document.querySelector(".block:first-of-type");
  
  /*#### Zadanie 4*/
  
  var lis_in_nav = document.querySelectorAll("nav li");
  
  var ps_in_divs = document.querySelectorAll("div p");
  
  var divs_in_article = document.querySelectorAll("article div");
  
  /*#### Zadanie dodatkowe*/
  
  addDirectionTop();
  
  function addDirectionTop(){
    
    var nodeListLis = document.querySelectorAll("nav li");
    //jak nie zamieniam na array, to nie dziala
    // jak dodaje osobna zmienna var arr = Array.from(nodeListLis); to tez bierze to za błąð
    nodeListLis = Array.from(nodeListLis);

    for(var i = 0; i < nodeListLis.length; i++){

      if( null ==  nodeListLis[i].dataset.direction){
        nodeListLis[i].dataset.direction = "top";  
        nodeListLis[i].style.backgroundColor = "green";
      }
      /* tez dziala:
    if( nodeListLis[i].getAttribute("data-direction") == null ){     
      nodeListLis[i].setAttribute("data-direction", "top");       
      nodeListLis[i].style.backgroundColor = "green";
    }*/
    }  
    
    
  }
  
   
    
  
})

