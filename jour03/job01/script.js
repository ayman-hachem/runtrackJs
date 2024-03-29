// $("#citation");

// citation.text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.");

// button.click(function(){
// citation.show();
// });

// button.click(function(){
// citation.hide();
// });

button.click(function showhide() {
$('#citation');
let citation = $("#citation");
    // Vérifie si l'article existe déjà
    if ($("#citation")) {
      // S'il existe, le cache
      citation.parentNode.removeChild("citation");
      citation.hide();
    } else {
      // S'il n'existe pas, ça le fait apparaitre
      citation.text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.");
      let newCitation = document.createElement('citation');
      newCitation.textContent = articleText;
      newCitation.id = 'citation';
      document.body.appendChild(newCitation);
      citation.show();
    }
})