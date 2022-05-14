// Création d'une fonction alerte
function showAlert() {
    console.log("Hello World!");
}
// Appel de la fonction alert
showAlert();



//-----------------------------------------------------------------------------------------------
// LES CONDITIONS


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











// END CONDITIONS
//-----------------------------------------------------------------------------------------------