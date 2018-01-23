  
 
function zadanie2() {
  var arr = [5, 29, 6, 4, 34, 56, 2, 3];
  var number = largest(arr);

  function largest(arguments) {
    arguments.sort(function (a, b) {
      return a - b;
    })
    return arguments.pop();
  }

  console.log(number);
}




function zadanie1(){
  
  boilEgg(1000 * 30);

  function boilEgg(seconds) {  // is the inner function, a closure

    // This starts working as soon as we enter boilEgg()
    var interval = setInterval(function () {
      console.log("Jajko sie gotuje...");
    }, 1000 * 5);

    // this also starts immediately
    var timeout = setTimeout(function () {
      // this will start working after 30 seconds
      clearInterval(interval);
      console.log("Jajko ugotowane!");      
    }, seconds);
  }  
  
}

  