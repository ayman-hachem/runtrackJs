// Variables contenants les éléments HTML
let buttonElement = document.getElementById("button");
let keyloggerElement = document.getElementById("keylogger")
// A chaque fois qu'on appuie sur une touche, on va modifier la valeur du textarea en la concaténant avec la valeur de la touche appuyée
document.addEventListener('keydown', (event) => {
      keyloggerElement.value += event.key
   
 })