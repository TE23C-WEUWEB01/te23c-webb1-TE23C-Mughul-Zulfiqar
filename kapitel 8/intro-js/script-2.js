// alert("Glädjens dag, det är fredag!");
// var namn = prompt("vad heter du?");
// var ålder = prompt("Hur gammal är du?");
// alert("Hej " + namn + " Du är " + ålder + " gammal " );
// console.log("Det verkar funka det här!");

// var tal2 = prompt("skriv ett till tal"); // läser som en string
// var summa = parseInt(tal1String) + parseInt(tal2String);
// alert("summan är " + summa);

// var ålder = prompt("Hur gammal är du nu?");
// var studentÅlder = parseInt(ålder) + 1
// //alert("Du är " + studentÅlder + " När du tar studenten!");
// document.write("<h2>Du är " + studentÅlder + " När du tar studenten!");

// Spamcheck
// fråga användaren vad slumpad "summa"
var slumptal1 = Math.round(Math.random() * 100);
var slumptal2 = Math.round(Math.random() * 100);
var summa = slumptal1 + slumptal2;
console.log(slumptal1, slumptal2);
var gissning = prompt("Vad är summan av " + slumptal1 + " + " + slumptal2 + " ? ");
if (gissning == summa) {
    document.writeln("<h1>Good job! 😘</h1>");
} else {
    document.writeln("<h1>Sucker! 😘</h1>");  
}