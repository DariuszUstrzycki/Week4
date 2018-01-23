/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() {
    /*
    Poniżej napisz kod rozwiązujący zadania. console.log("Hello");
     */
   
   var liElements = document.querySelectorAll(".ex6 li");
  var i;
  for(i =0; i< liElements.length; i++){
    //liElements[i].dataset.id = i; // tu JS doda 'data-'
    liElements[i].setAttribute("data-id", i); // tu musimy sami dodac
  }
  
  
});

function exercise4(){
  document.querySelector(".ex5 ul ").classList.add("menu");
  var liElements = document.querySelectorAll(".ex5 ul li");
  liElements.forEach( function(element){    
    element.classList.add("menuElement");    
  });

  var errorElements = document.querySelectorAll(".error");
  liElements.forEach( function(element){    
    element.classList.remove("error");    
  });
}



function exercise4(){
  var spanList = document.querySelectorAll(".exercise.ex4 ul li span");
  // console.log(spanList.length); nie trzeba pisac. Wystarczy breakpoint
  var name = document.getElementById("name");
  var favColor = document.getElementById("fav_color");
  var favMeal = document.getElementById("fav_meal");

  name.innerHTML = "Darek";
  favColor.innerHTML = "blue";
  favMeal.innerHTML = "pizza";
}

function exercise3(){
  var fA = document.querySelector(".ex3 .firefox + a");
  fA.innerText = "Firefox"; 
  fA.href = "https://www.mozilla.org/en-US/firefox/";    
  var fDiv = document.querySelector(".ex3 .firefox");
  fDiv.style.backgroundImage = "url('assets/img/firefox.png')";  

  var eA = document.querySelector(".ex3 .edge + a");  
  eA.href = "https://www.microsoft.com/en-hk/windows/microsoft-edge";  
  var eDiv = document.querySelector(".ex3 .edge");
  eDiv.style.backgroundImage = "url('assets/img/edge.png')";  

  // NOTE:
  var chA = document.querySelector(".ex3 .chrome + a");
  // setting link's text:
  chA.innerText = "Chrome"; 
  // setting a link
  chA.href = "https://www.google.com/chrome/browser/desktop/index.html";

  var chDiv = document.querySelector(".ex3 .chrome");
  // setting a picture on a div:
  chDiv.style.backgroundImage = "url('assets/img/chrome.png')";  
  // setting div's width:
  chDiv.style.width = "100px";  
  
  // background image and width pojawiaja sie jako czesc stylu, 
// zmieniaja wyglad div'a?!
 
  
}

function exercise2(){
  
  var options = document.querySelectorAll("option.year");
  console.log(options.length);

  var i;
  for (i = 0; i < options.length; i++) {
    options[i].innerHTML = options[i].value;
    options[i].dataset.year = 20 + parseInt(options[i].value);
  }
  
}

function exercise1(){

  var divEx1 = document.querySelectorAll(".ex1 li");

  console.log(divEx1[4].classList.add("big"));  

  var i;
  for( i = 0; i < divEx1.length; i++){

    if(divEx1[i].dataset.direction != "down"){
      divEx1[i].dataset.direction = "up";
    }

    if( i % 2 === 0 ){
      divEx1[i].style.backgroundColor = "lightgreen";
    }

    if( i % 3 === 0 ){
      divEx1[i].style.textDecoration = "underline";
    } 
  }

}
