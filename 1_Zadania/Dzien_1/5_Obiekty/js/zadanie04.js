var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

var r1 = new Robot ("Mike");
r1.sayHi("Darek");
r1.changeName("Robocop");
r1.sayHi("Darek");
r1.isFunctional = false;
r1.sayHi("Darek");
r1.fixIt();

/*
#### Zadanie 4

1. W pliku `zadanie04.js` możesz znaleźć przykładowy konstruktor dla robota.
2. Konstruktor oczekuje, że podasz tylko imię robota.
3. Wszystkie roboty mają od razu kilka metod (metody dodane są przez prototypy).
4. Utwórz kilka robotów i sprawdź, czy w napisanym kodzie nie ma błędów.
*/
