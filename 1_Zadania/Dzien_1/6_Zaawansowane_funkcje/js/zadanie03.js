/**
 * Funkcje wyższego rzędu.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */

//Twój komentarz ...
function sortArray() {

    //array podlegający sortowaniu
    var points = [41, 3, 6, 1, 114, 54, 64];

    //sort wywołany jest na arrayu
    points.sort(function(a, b) {
        //na kazdych 2 elementach nastpeuje porównanie, który jest większy
        return a-b;
    });

    //zwracany jest uporządkowany array
    return points;
}

//Twój komentarz ...
sortArray();
