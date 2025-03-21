// här skriver vi javascript
// var tal1 = parseInt(prompt("Skriv in ett heltal"));
// var tal2 = parseInt(prompt("Skriv in ett till heltal"));

// if (tal1 > tal2) {
//     document.writeln(`${tal1} är större än ${tal2}`);
// } else {
//     document.writeln(`${tal2} är större än ${tal1}`);
// }

// en liten inlogging 
// while (true) {
//     var namn = prompt("ange ditt namn?");
//     var lösenord = prompt("ange ditt lösenord");
//     if (lösenord == "12345") {
//         document.writeln(`Du ${namn} är inloggad`);
//         break;
//     } else {
//         document.writeln(`Du ${namn} har skrivit fek lösenord`);
//     }
// }

// skriv it talen 20-30
// for (let index = 20; index < 31; index++) {
//    document.writeln(`tal: ${index} <br>`);

// }

// let val = confirm("Klicka OK for att fortsätta");
let val = true;
while (val) {
    val = confirm("Klicka OK for att fortsätta");
    break;
}