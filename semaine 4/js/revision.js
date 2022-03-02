/*
       1 : creer une variable avec votre prenom, que vous allez prenom
       2 : réaliser un affichage dans votre console / bonjour, je m'appelle prenom
*/

let prenom = "jeremy";
console.log("bonjour je m'appelle " + prenom);

//nom en maj
let text = "bonjour je m'appelle jeremy";
console.log(text.toUpperCase().split(' '));

console.log(`text : ${prenom.toUpperCase()} `);

// decla de tableaux
const numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const fruits = ["mangue", "pastèque", "poire", "orange", "ananas"];

// acces a un element du tableau
console.log(fruits[0]); // acces au 1ere element 
console.log(fruits[7]); // acces au 8eme element 
fruits.unshift("fraise"); // ajout au debut du tableau
fruits.push("banane"); // ajout en fin de tableau
fruits.shift(); // supprimer le 1er element
fruits.pop(); // supprimer le dernier element
console.log(fruits.indexOf("orange")); // retourne la position de l'element orange
console.log(Array.isArray(fruits));  // true


const personne = {
         prenom: "Julien",
         nom: "La garde",
         age: 30,
         passions: ["foot", "natation", "jeux videos"],
         adresse : {
         rue : "rue Nationale",
         ville : "Lille",
         pays : "France"
         }
       };
       
       //  afficher un objet
       console.log(personne); 
       // acces aux attributs de l'objet
       console.log(personne.prenom); // acces au prenom
       
       const todos = [
               {
               id: 1,
               text: "Faire les courses",
               isCompleted: true,
               },
               {
               id: 2,
               text: "Balade au vieux Lille",
               isCompleted: true,
               },
               {
               id: 3,
               text: "Préparer le diner",
               isCompleted: false,
               },

               {
                      id: 4,
                      text: "Regarder la TV",
                      isCompleted: false,
                      },
                     ];
                     
                     
               // afficher un tableau d'objets
                     console.log(todos); 
                     
                     
               // afficher l'attribut text du 1er objet du tableau
                     console.log(todos[0].text); 
                     
                     if (condition1) {   //  traitement si condition 1 est vraie } else if (condition2) {   //  traitement si condition 2 est vraie } else {
  //  le reste des cas  }

                    
  const x = 14;
  const y = 10;
   
  if (x == y) {
    console.log("les deux nombres sont égaux");
  } else if (x > y) {
    console.log("x est supérieur à y");
  }
  else {
    console.log("x est inférieur à y");
  }
   
  if (x > y && x < 20) {
    console.log("nombre autorisé");
  }}

  switch(feu){
         case "vert":
                console.log('avancez!');
                break;
         case
                console.log()

  }

  /*
       Exercice Garage : je vais vous donner un tableau d'objet sur lequel on va travailler
       */

       const garage = [
              {
                  marque : 'Ferrari',
                  couleur : 'rouge'
              },
              {
                  marque : 'BMW',
                  couleur : 'grise'
              },
              {
                  marque : 'LADA',
                  couleur : 'marron'
              },
              {
                     marque : 'peugeot',
                     couleur : 'bleue'
                 },

                 console.log("j'ai une "+ garage[2].marque + " de couleur "+ garage[2].couleur),
                 garage.push({
                     marque : 'Peugeot',
                     couleur : 'bleue'
                 }),
