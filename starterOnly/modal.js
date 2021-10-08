function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
modalClose.addEventListener("click", closeModal); 
  
function closeModal() {
  modalbg.style.display = "none";
};

//********* validation prenom ************
//récupération du champ prénom
const textprenom = document.getElementById("first");
//récupération du champ du texte d'invalidation
const prenominvalid = document.getElementById("validation_prenom");

//Ecoute d'un changement du champ prénom
textprenom.addEventListener("change", function() {
  prenomvalid(this);
});

function prenomvalid(inputprenom) {
  //création de la regex
  const regexprenom = /^[a-zA-Z]{2,}/g;
  //test de la regex sur le champ prénom
  const validprenom = regexprenom.test(textprenom.value);
  if(validprenom === false) {
    prenominvalid.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    prenominvalid.style.color = "red";
    prenominvalid.style.fontsize = "1px";//n'est pas pris en compte
    return false;
  }else {
    prenominvalid.innerHTML = ""; 
    return true;
  }
};

//********* validation nom ************
//récupération du champ nom
const textnom = document.getElementById("last");
//récupération du champ du texte d'invalidation
const nominvalid = document.getElementById("validation_nom");

//Ecoute d'un changement du champ prénom
textnom.addEventListener("change", function() {
  nomvalid(this);
});

function nomvalid(inputnom) {
  //création de la regex
  const regexnom = /^[a-zA-Z]{2,}/g;
  //test de la regex sur le champ nom
  const validnom = regexnom.test(textnom.value);
  if(validnom === false) {
    nominvalid.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    nominvalid.style.color = "red";
    return false;
  }else {
    nominvalid.innerHTML = "";
    return true;
  }
};

//********* validation email ************
//récupération du champ email
const textemail = document.getElementById("email");
//récupération du champ du texte d'invalidation
const emailinvalid = document.getElementById("validation_email");

//Ecoute d'un changement du champ email
textemail.addEventListener("change", function() {
  emailvalid(this);
});

function emailvalid(inputemail) {
  //création de la regex
  const regexemail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/g;
  //test de la regex sur le champ email
  const validemail = regexemail.test(textemail.value);
  if(validemail == false) {
    emailinvalid.innerHTML = "L'adresse électronique est invalide.";
    emailinvalid.style.color = "red";
    return false;
  }else{
    emailinvalid.innerHTML = "L'adresse électronique est valide.";
    emailinvalid.style.color = "green";
    return true;
  }
};

//********* validation nombre de concours ************
//récupération du champ nombre de concours
const textconcours = document.getElementById("quantity");
//récupération du champ du texte d'invalidation
const concoursinvalid = document.getElementById("validation_concours");

//Ecoute d'un changement du champ nombre de concours
textconcours.addEventListener("change", function() {
  concoursvalid(this);
});

function concoursvalid(inputconcours) {
  //création de la regex
  const regexconcours = /[0-9]/g;
  //test de la regex sur le champ nombre de concours
  const validconcours = regexconcours.test(textconcours.value);
  if(validconcours == false) {
    concoursinvalid.innerHTML = "Une valeur numérique doit être saisie.";
    concoursinvalid.style.color = "red";
    return false;
  }else{
    if(textconcours.value == 0){
      concoursinvalid.innerHTML = "";
      return true;}
    else{
      validCheckVille.innerHTML = "Veuillez cocher au moins une ville.";
      concoursinvalid.innerHTML = "";
    }
    return true;
  }
};

//********* validation bouton radio ************
const radios = document.querySelectorAll(".location");
const validCheckVille = document.getElementById("validation_checkbox_ville");

radios.forEach((location) => {location.addEventListener("click",function(){
  validRadioChecked(this);
})
});

function validRadioChecked(inputradio){
  validCheckVille.innerHTML = "";
  return true;
};


//********* validation formulaire ************
//********* validation conditions d'utilisation ************
const conditions = document.getElementById("checkbox1");
const validconditions = document.getElementById("valid_conditions");

//Ecoute d'une sélection du bouton des conditions d'utilisation
conditions.addEventListener("click", function(){
  selecConditions(this);
});

function selecConditions(conditions){
  validconditions.innerHTML = "";
  return true;
};

const formSubmit = document.querySelector(".btn-submit");

formSubmit.addEventListener("submit", function(){
  e.preventDefault();
  validate(this);
});

function validate(e){
  if((prenomvalid) && (nomvalid) && (emailvalid) && (concoursvalid) && (validRadioChecked)){
    if(selecConditions){
      document.reserve.submit();
      const validtext = document.getElementById("valid_soumission");
      validtext.innerHTML = "Merci, votre réservation a été reçue!";
      validtext.style.color = "green";
    }else{
      validconditions.innerHTML = "Veuillez sélectionner les conditions d'utilisation.";
    };
  }else{
    return false;
  }
};
