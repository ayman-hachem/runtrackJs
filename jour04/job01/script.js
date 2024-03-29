// Lorsque le bouton est cliqué
document.getElementById("button").addEventListener("click", function() {
  // Ca utilise la fonction fetch pour récupérer le contenu du fichier "expression.txt"
  fetch("expression.txt")
    // Une fois que la réponse est obtenue, cela va vérifie si la réponse est ok
    .then(response => {
      if (!response.ok) { // Si y a pas de reponse
        throw new Error("il y a pas de réponse"); // ca lance une erreur
      }
      return response.text(); // Renvoie le contenu de la réponse sous forme de texte
    })
    // Une fois le contenu du fichier texte est obtenu
    .then(data => {
      // Ca met le contenu du fichier texte dans le <p>
      document.getElementById("expression").textContent = data;
    })
    // ca gère les erreurs lors de la récupération du contenu du fichier txt
    .catch(error => {
      console.error('erreur', error); // Affiche l'erreur dans la console
    });
});
