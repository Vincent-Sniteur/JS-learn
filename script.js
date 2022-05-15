// Création d'une fonction alerte
function showAlert() {
    console.log("Hello World!");
}
// Appel de la fonction alert
showAlert();



//-----------------------------------------------------------------------------------------------
// LES CONDITIONS

// Afficher si la valeur est un nombre pair ou impair
var nombre = 10; // On demande à l'utilisateur d'entrer un nombre
if (nombre % 2 == 0) {
    console.log("C'est un nombre pair");
}
else if (nombre === 10) { 
    console.log("C'est 10");
}
else {
    console.log("C'est un nombre impair");
}


// OPERATEUR DE COMPARAISON : ==, !=, >, <, >=, <=

// a == b // a égale à b
// a === b // a == b et a est de même "type" que b
// a >= b // a supérieur OU égal à b
// a > b   // a strictement supérieur à b
// a <= b // a inférieur OU égal à b
// a < b   // a strictement inférieur à b
// a != b // a est différent de b
// a !== b // a et différent de b, mais a et b doivent être du même type également


// OPERATEUR DE LOGIQUE : && (et), || (ou), ! (non)

// && ET
true && true // true
true && false // false
false && true // false
false && false // false

// || OU
true || true // true
true || false // true
false || true // true
false || false // false

// ! NON
!true // false
!false // true



// Création d'un objet contenant les données de l'utilisateur
let tableau = {
    prenom: "Jean",
    nom: "Bernard",
    taille: 10,
    age: 18
}


// Selection de la valeur de l'objet AGE et utilisation
// De la valeur pour afficher un message


// Récupération des données de l'objet dans la variable " tableau "
if (tableau.age >= 18) {  // Si l'age est supérieur ou égal à 18
    console.log("Tu es Majeur"); // Alors afficher "Tu es Majeur"
} else if (tableau.age >= 16) { // Sinon si l'age est supérieur ou égal à 16 ( sans compter les 18 )
    console.log("Tu as l'âge pour passer la conduite"); // Alors afficher "Tu as l'âge pour passer la conduite"
} else { // Sinon
    console.log("Tu es Mineur"); // Alors afficher "Tu es Mineur"
}

// Résumer du code au dessus en texte
/*
SI AGE supérieur ou égal à 18
    ALORS afficher "Tu es Majeur"
SINON SI age supérieur ou égal à 16 ( sans compter les 18 )
    ALORS afficher "Tu as l'âge pour passer la conduite"
SINON
    ALORS afficher "Tu es Mineur"

*/



// Selecteur de la valeur de l'objet pour un " Tarif Jeune" / " Tarif Mineur" / " Tarif Normal"
if (tableau.age >= 18 && tableau.age <= 25) { // Si l'age est supérieur ou égal à 18 et inférieur ou égal à 25
    console.log("Vous avez accès au Tarif Jeune"); // Alors afficher "Tarif Jeune"
} else if (tableau.age <= 17) { // Sinon si l'age est inférieur ou égal à 17
    console.log("Vous avez accès au Tarif Mineur"); // Alors afficher "Tarif Mineur"
} else { // Sinon
    console.log("Vous n'avez accès qu'au Tarif Normal"); // Alors afficher "Tarif Normal"
}

// Résumer du code au dessus en texte
/*
ET : &&
OU : || < Les barres du 6

SI AGE supérieur égal à 18 ET/OU inférieur égal à 25
    ALORS afficher "Tarif Jeune"
SINON SI age inférieur ou égal a 17
    ALORS afficher "Tarif Mineur"
SINON
    ALORS afficher "Tarif Normal"
*/



// Selecteur de la valeur de l'objet pour un " Tarif réduit " / " Tarif normal " pour les 18 à 25 ans et les 70 ans et plus
if (tableau.age >= 18 && tableau.age <= 25 || tableau.age >= 70) {
    console.log("Vous avez accès au Tarif réduit");
} else { 
    console.log("Vous n'avez accès qu'au Tarif Normal");
}

// Résumer du code au dessus en texte
/*
Si AGE supérieur ou égal à 18 ET inférieur ou égal à 25 OU égal supérieur a 70
    ALORS afficher "Tarif réduit"
Sinon
    ALORS afficher "Tarif Normal"
*/



// les == et ===
// == : comparaison des valeurs
// === : comparaison des valeurs et du type de données

if (tableau.age === 18) {
    console.log("Vous avez 18 ans");
}
/*
SI AGE == 18
    ALORS afficher "Vous avez X ans"
*/

// Autre possibilité avec switch
switch (tableau.age) { // On utilise le nom de la variable pour le switch
    case 18: // Si l'age est égal à 18
        console.log("GG ta 18 ans"); // Alors afficher "GG ta 18 ans"
        break; // Arrêt de la boucle
    case 19: // Si l'age est égal à 19
        console.log("GG ta 19 ans"); // Alors afficher "GG ta 19 ans"
        break; // Arrêt de la boucle
} // Fin de la boucle


// EXEMPLE SWITCH 
// switch (expression) {
//     case valeur1:
//       // Instructions à exécuter lorsque le résultat
//       // de l'expression correspond à valeur1
//       instructions1
//       break
//     case valeur2:
//       // Instructions à exécuter lorsque le résultat
//       // de l'expression correspond à valeur2
//       break
//     default:
//       // Instructions à exécuter lorsqu'aucune des valeurs
//       // ne correspond 
//       break
//   }




// END CONDITIONS
//-----------------------------------------------------------------------------------------------

// LES BOUCLES : FOR, WHILE


//WHILE
// while (condision) {
//     // instructions
// }

//Exemple while : tant que la condition est vraie, on exécute les instructions
var i = 0; // On initialise la variable i à 0
while (i < 10) { // Tant que i est inférieur à 10
    console.log(i); // On affiche la valeur de i
    i++; // On incrémente i ( si oublie du i++, exécute les instructions a l'infini, besoin de ça ou d'un break)
}

// Même exemple mais avec un break a 5
var u = 0;
while (u < 100) { // Tant que u est inférieur à 10
    console.log(4); // On affiche la valeur de u
    if (u === 5) { // Si u est égal à 5
        break; // On arrête la boucle
    }
    u++; // On incrémente u
}

// FOR : Boucle pour des éléments
for ( var x = 0; x < 10; x++ ) { // On initialise x à 0, tant que x est inférieur à 10, on incrémente x
    console.log(3); // On affiche la valeur de x
}

//FOR pour parcourir un tableau
var fruits = ["pommes", "poires", "fraises", "tomates", "oranges"]; // On initialise le tableau fruits
for (var Y = 0; Y < fruits.length; Y++) { // On initialise Y à 0, tant que Y est inférieur à fruits.length, on incrémente Y
    console.log("Aujourd'hui vente spécial sur les " + fruits[2]); // On affiche la valeur de fruits[Y]
}

//FOR sens inverse
for (var Z = fruits.length - 1; Z >= 0; Z--) { // On initialise Z à fruits.length - 1, tant que Z est supérieur ou égal à 0, on décrémente Z
   var fruit = fruits[Z]; // On initialise fruit à fruits[Z]
   console.log("Aujourd'hui vente spécial sur les " + fruit); // On affiche la valeur de fruits[Z]
}


/*
numberZ est premier si il est divisible par 1 et par lui-même
numberZ n'est pas premier si il est divisible par un nombre compris entre 2 et lui-même - 1
( si j'arrive a diviser entre 2 a 90, n'est pas premier )
*/
var numberZ = 91; // On initialise numberZ à 91 ( 31 pour non premier exemple )
var estPremier = true; // On initialise estPremier à true


for (var i = 2; i < numberZ; i++) { // On initialise i à 2, tant que i est inférieur à numberZ, on incrémente i
    if (numberZ % i === 0) { // Si numberZ est divisible par i
        estPremier = false; // On change estPremier à false
        console.log("Ce nombre n'est pas premier"); // On affiche "Non premier"
        console.log(numberZ + " est divisible par " + i); // On affiche nomber et i
        break; // On arrête la boucle
    }
}

// Si on arrive à la fin de la boucle, on affiche "Ce nombre est premier"
if (estPremier){ // Si estPremier est vrai
    console.log(numberZ + " est bien un nombre Premier"); // On affiche "Premier"
}



// EXEMPLE Tableau 
var eleves = [{
    nom: "Dupont",
    prenom: "Jean",
    age: 18
}, {
    nom: "Durand",
    prenom: "Pierre",
    age: 20
}, {
    nom: "Martin",
    prenom: "Paul",
    age: 18
}];

// BOUCLE TABLEAU
// Crée boucle dans eleves pour voir les élèves en dessous de 18 ans
for (i = 0; i < eleves.length; i++) { // On initialise i à 0, tant que i est inférieur à eleves.length, on incrémente i
    var eleve = eleves[i]; // On initialise eleve à eleves[i]
    if (eleve.age < 18) { // Si l'age de l'élève est inférieur à 18
        console.log(eleve.prenom + " " + eleve.nom + " est un élève mineur"); // On affiche le prénom et le nom de l'élève
    }
    else { // Sinon
        console.log("Aucun elève n'est mineur") // Si aucun élève n'est mineur
    }
}
/*
pour chaque élève 
    si age en dessous de 18 ans
        alors afficher prenom nom est un élève mineur
*/



// END BOUCLES
//-----------------------------------------------------------------------------------------------



