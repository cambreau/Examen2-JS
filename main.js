// ---- Selection HTML ---- //
const erreurMsgHTML = document.getElementById("erreurMsg");
const inputHTML = document.getElementById("nameInput");
let outputHTML = document.getElementById("output");
let charCountHTML = document.getElementById("charCount");
const resetBtnHTML = document.getElementById("resetBtn");

// Compteur Caractere
/**
 * Fonction qui compte les caracteres
 * @param {event} event
 */
const compteurCaractere = (event) => {
  const compteur = event.target.value.length;
  charCountHTML.textContent = `${compteur}/50`;
  if (compteur > 50) {
    charCountHTML.style.color = "red";
  } else {
    charCountHTML.style.color = "black";
  }
};

inputHTML.addEventListener("input", compteurCaractere);

// HandleSubmit
/**
 * Gere la soumission du formulaire,
 * @param {event} event
 */
function handleSubmit(event) {
  // Etape 1: Stopper la soumission du formulaire.
  event.preventDefault();
  const input = document.getElementById("nameInput").value;

  // Etape 2: Ouput
  const name = input;
  outputHTML.textContent = name;
}

document.getElementById("nameForm").addEventListener("submit", handleSubmit);

//Reset Form
/* Reinitialise le formulaire
 */
const resetForm = () => {
  document.getElementById("nameInput").value = "";
  outputHTML.textContent = "";
  erreurMsgHTML.textContent = "";
};

resetBtnHTML.addEventListener("click", resetForm);
