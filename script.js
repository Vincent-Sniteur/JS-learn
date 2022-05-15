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
    age: 17
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

// LES FONCTIONS / FUNCTIONS
// Prendre une valeur en entrée et en sortir une valeur
// Genre éolièenne : prend du vent > en sort de l'électricité


// FONCTION en reprennant l'exemple de la boucle pour nombre premier
// je reprend une valeur ( nombre = 10 ) ligne 14

function nombrePremier(nombre) { // On définit la fonction nombrePremier avec nombre en paramètre
    for (var i = 2; i < nombre; i++) { // On initialise i à 2, tant que i est inférieur à nombre, on incrémente i
        if (nombre % i === 0) { // Si nombre est divisible par i
            return false; // On retourne false
        }
    }
    return true; // Si on arrive à la fin de la boucle, on retourne true
}

nombrePremier(20); // On appelle la fonction nombrePremier avec le nombre 20 en paramètre


// EXEMPLE FONCTION multiplication  
function multiplication(a, b) { // On définit la fonction multiplication avec a et b en paramètre
    if (b === undefined) { // Si b est undefined < sécurité pour éviter une erreur
        b = 1; // On initialise b à 1
    }
    return a * b; // On retourne a * b
}

multiplication(2, 3); // On appelle la fonction multiplication avec 2 et 3 en paramètre DONC donnera 6



// EXEMPLE FONCTION moyenne age d'un tableau
function afficheMoyenneAge(eleves) {
    var moyenneAge = 0; // On initialise moyenneAge à 0
    for (var i = 0; i < eleves.length; i++) { // On initialise i à 0, tant que i est inférieur à eleves.length, on incrémente i
        var eleve = eleves[i]; // On initialise eleve à eleves[i]
        moyenneAge += eleve.age; // On ajoute l'age de l'élève à moyenneAge
        if (eleve.age >= 18) { // Si l'age de l'élève est supérieur ou égal à 18
            console.log(eleve.prenom + " " + eleve.nom + " est un élève majeur"); // On affiche le prénom et le nom de l'élève
        } else { // Sinon
            console.log(eleve.prenom + " " + eleve.nom + " est un élève mineur"); // On affiche le prénom et le nom de l'élève
        }
    }
    moyenneAge = moyenneAge / eleves.length; // On divise moyenne par le nombre d'élèves
    console.log("La moyenne d'âge des élèves est de " + moyenneAge); // On affiche la moyenne
}
afficheMoyenneAge(eleves); // On appelle la fonction afficheQuiALaMoyenne avec eleves en paramètre

var pikachu = {
    crier: function() { // On définit la fonction crier avec une fonction anonyme
        console.log("PIKACHU !!"); // On affiche "PIKACHU"
    }
}

// MATH
// LES MATH LES PLUS USE
Math.round(2.5); // Retourne 3 (arrondi à l'entier le plus proche)
Math.round(2.4); // Retourne 2 (arrondi à l'entier le plus proche)
Math.ceil(2.6); // Retourne 3 (arrondi à la virgule supérieur)
Math.ceil(2.6); // Retourne 3 (arrondi à la virgule supérieur)
Math.floor(2.6); // Retourne 2 (arrondi à la virgule inférieur)
Math.floor(2.4); // Retourne 2 (arrondi à la virgule inférieur)
Math.random(); // Retourne une valeur aléatoire entre 0 et 1
Math.random() * 10; // Retourne une valeur aléatoire entre 0 et 10
Math.PI; // Retourne la valeur de PI

var numberVirgule = 10.45; // On initialise numberVirgule à 10.45

function nombreSansVirgule(numberVirgule) { // On définit la fonction nombreSansVirgule avec numberVirgule en paramètre
    return Math.round(numberVirgule); // On retourne le nombre arrondi
}
nombreSansVirgule(); // On appelle la fonction nombreSansVirgule


// function utiliser sur objet = methode ( sémantique )

// PUSH - Ajouter un objet dans un tableau
var a = [1, 2, 3]; // On initialise a à [1, 2, 3]
a.push(4); // On ajoute 4 à a
console.log(a); // On affiche a et ça donne [1, 2, 3, 4]

// Exemple function push sur objet dans array > Si un elève est majeur on l'ajoute au tableau "elevesMajeurs"
var estMajeur = function (eleves) { // On définit la fonction estMajeur avec eleve en paramètre
    var elevesMajeurs = [] // On initialise elevesMajeurs à [] pour dire que c'est un tableau
    for (var i = 0; i < eleves.length; i++) { // On initialise i à 0, tant que i est inférieur à eleves.length, on incrémente i
        var eleve = eleves[i]; // On initialise eleve à eleves[i]
        if (eleve.age >= 18) { // Si l'age de l'élève est supérieur ou égal à 18
            elevesMajeurs.push(eleve); // On ajoute l'élève à elevesMajeurs
        }
    }
    return elevesMajeurs; // On retourne elevesMajeurs
}
console.log(estMajeur(eleves)); // On affiche la fonction estMajeur avec eleves en paramètre


// Calcule nombre de mot dans une phrase
var phrase = "lorem ipsum dolor sit amet fdsfds lorem fsdfsd pokemone"; // On initialise phrase à "lorem ipsum dolor sit amet"
for(i = 0; i < phrase.length; i++) {
    // console.log(phrase.length);
}




// verifier phrase si mot dans la phrase et retourner le nombre de fois ce mot sinon retourner 0
/*
ON SEPARE nothre phrase GRACE AU ESPACES ( split )
ON CREE UN COMPTEUR
POUR CHAQUE mots
SI le mot est dans mon compteur alors je l'ajoute à mon compteur
sinon je lui assigne la valeur
affiche le compteur
*/

// Creation d'un compteur en objet
var frequence = function(phrase){
    var compteur = {} // On initialise compteur pour être un objet
    var mots = phrase.toLowerCase().split(" ") // On initialise mots à la phrase en minuscule et on la sépare par des espaces
    for (var i = 0; i < mots.length; i++){
        var mot = mots[i]; // On initialise mot à mots[i]
        if(compteur[mot] == undefined){
            compteur[mot] = 1; // Si le mot n'est pas dans le compteur, on l'ajoute avec la valeur 1
        }
        else{ // Sinon
            compteur[mot]++ // On incrémente le compteur
        }
    }
    return compteur // On retourne le compteur
}

console.log(frequence(phrase)); // On affiche la fonction frequence avec phrase en paramètre




// Calculer qui a la meilleurs moyenne entre eleve1 et eleve2
var eleve1= {
    prenom: "Jean",
    note: [1, 10, 20, 15, 12]
}
var eleve2= {
    prenom: "Pierre",
    note: [8, 15, 12, 5, 9]
}

var moyenneEleveInClass = function(notes){ // On définit la fonction moyenneEleveInClass avec notes en paramètre
    var moyenneClass = 0; // On initialise moyenneClass à 0
    for (var i = 0; i < notes.length; i++){ // On initialise i à 0, tant que i est inférieur à notes.length, on incrémente i
        moyenneClass = moyenneClass + notes[i]; // On ajoute la note à moyenneClass
    }
    return moyenneClass / notes.length; // On retourne la moyenne de la classe
}

var bestInClass = function(a, b){ // On définit la fonction bestInClass avec eleve1 et eleve2 en paramètre
    return moyenneEleveInClass(a.note) > moyenneEleveInClass(b.note) ? a : b; // On retourne le meilleur élève ( dans un array )
}


console.log(bestInClass(eleve1, eleve2)); // On affiche la fonction bestInClass avec eleve1 et eleve2 en paramètre > retourne true si eleve1 a la meilleure moyenne
console.log(moyenneEleveInClass(eleve2.note)); // On affiche la fonction moyenneEleveInClass avec eleve1.note en paramètre > retourne la moyenne de eleve1




// END LES FONCTIONS / FUNCTIONS
//-----------------------------------------------------------------------------------------------




