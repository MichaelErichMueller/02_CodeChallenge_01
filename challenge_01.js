
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/


//console.log(parseInt(prompt("Erste Zahl: ")) + parseInt(prompt("Zweite Zahle: ")));

// Variante 1

// vorteil gute Lesbarkeit aber viele variablen


//Deklaration

let ziffer1, ziffer2;
let zahl1, zahl2;
let summe;

// EIngabe Wertzuweißung :: Ziffern

ziffer1 = prompt("Zahl1:");
ziffer2 = prompt("Zahl2:");
console.log(typeof ziffer1);
console.log(typeof ziffer2);

// Typenkonvertierung Ziffern --> Zahl (String too Number)
zahl1 = parseInt(ziffer1);
zahl2 = parseInt(ziffer2);
console.log(typeof zahl1);
console.log(typeof zahl2);

// Berechnung :: Summe / Adition
summe = zahl1 + zahl2;

// Ausgabe
console.log("Die Summe der Zahlen ist:" + summe);


// summe = zahl1 + zahl2;

// console.log("Die Summe der Zahlen ist:" + summe);

