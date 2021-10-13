function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
};

// close modal form
modalClose.addEventListener("click", closeModal); 
  
function closeModal() {
  modalBg.style.display = "none";
};

//********* validation firstname ************
//getting field firstname
const textFirstname = document.getElementById("first");
//getting field invalid text
const firstnameInvalid = document.querySelector(".validation_firstname");

//listening to a change from the field firstname
textFirstname.addEventListener("change", function() {
  validateFirstname(this);
});

function validateFirstname(inputfirstname) {
  //regex creation
  const regexFirstname = /^[a-zA-ZÀ-ÿ]{2,}/g;
  //regex test on the field firstname
  const validFirstname = regexFirstname.test(textFirstname.value);
  if(validFirstname === false) {
    firstnameInvalid.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du firstname.";
    firstnameInvalid.style.color = "red";
    return false;
  }else {
    firstnameInvalid.innerHTML = ""; 
    return true;
  }
};

//********* validation lastname ************
//getting field lastname
const textLastname = document.getElementById("last");
//getting field invalid text
const lastnameInvalid = document.querySelector(".validation_lastname");

//listening to a change from the field Lastname
textLastname.addEventListener("change", function() {
  validateLastname(this);
});

function validateLastname(inputlastname) {
  //regex creation
  const regexLastname = /^[a-zA-ZÀ-ÿ]{2,}/g;
  //regex test on the field Lastname
  const validLastname = regexLastname.test(textLastname.value);
  if(validLastname === false) {
    lastnameInvalid.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    lastnameInvalid.style.color = "red";
    return false;
  }else {
    lastnameInvalid.innerHTML = "";
    return true;
  }
};

//********* validation email ************
//getting field email
const textEmail = document.getElementById("email");
//getting field invalid text
const emailInvalid = document.querySelector(".validation_email");

//listening to a change from the field email
textEmail.addEventListener("change", function() {
  validateEmail(this);
});

function validateEmail(inputemail) {
  //regex creation
  const regexEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/g;
  //regex test on the field email
  const validEmail = regexEmail.test(textEmail.value);
  if(validEmail === false) {
    emailInvalid.innerHTML = "L'adresse électronique est invalide.";
    emailInvalid.style.color = "red";
    return false;
  }else{
    emailInvalid.innerHTML = "L'adresse électronique est valide.";
    emailInvalid.style.color = "green";
    return true;
  }
};

//********* validation birthdate ************
//getting field birthdate
const textBirthdates = document.getElementById("birthdate");
//getting field invalid text
const birthdateInvalid = document.querySelector(".validation_birthdate");

textBirthdates.addEventListener("change", function(e){
  let birthYear = e.target.value.split("-")[0];
  let now = new Date();
  let nowYear = now.getFullYear();
  let diffYear = Math.abs(nowYear - birthYear);
if (diffYear <= 120){
  return true;
}else{
  birthdateInvalid.innerHTML = "L'année n'est pas valide.";
  return false
  };
})

//********* validation number of competitions ************
//getting field nombre de concours
const textConcours = document.getElementById("quantity");
//getting field invalid text
const concoursInvalid = document.querySelector(".validation_concours");

//listening to a change from the field nombre de concours
textConcours.addEventListener("change", function() {
  validateCompetitions(this);
});
function validateCompetitions(inputconcours) {
  //regex creation
  const regexConcours = /[0-9]/g;
  //regex test on the field nombre de concours
  const validConcours = regexConcours.test(textConcours.value);
  if(validConcours === false) {
    concoursInvalid.innerHTML = "Une valeur numérique doit être saisie.";
    concoursInvalid.style.color = "red";
    return false;
  }else{
    validateRadioChecked();
  }
};
    //********* validation bouton radio ************
    const locations = document.querySelectorAll(".location");
    const validCheckVille = document.querySelector(".validation_checkbox_ville");

    function validateRadioChecked(inputradio){
      let resConcours = parseInt(textConcours.value, 10);
      if (Number.isNaN(resConcours)) {
        concoursInvalid.innerHTML = "";
        validCheckVille.innerHTML = "";
        return NaN;
      }else{
        console.log("pas un NaN");
          //listening to a change from the radio button
          for(let i = 0; i < locations.length; i++){
            location[i].addEventListener("click", function() {
              if(location[i].checked === true){
                validCheckVille.innerHTML = "";
                return true;
              }else{
                validCheckVille.innerHTML = "Veuillez sélectionner une ville";
                return false;}
            });
          };
      }
    };
//********* validation terms of use ************
const conditions = document.getElementById("checkbox1");
const validConditions = document.querySelector(".valid_conditions");

//Ecoute d'une sélection du bouton des conditions d'utilisation
conditions.addEventListener("click", function(){
  selectConditions(this);
});

function selectConditions(inputconditions){
  if(conditions.checked === true){
  validConditions.innerHTML = "";
  return true;
  }else{
    return false;
  }
};

//********* validation formulaire ************
const formSubmit = document.querySelector(".btn-submit");

formSubmit.addEventListener("submit", function(){
  e.preventDefault();
  validate(this);
});

function validate(e){
  if((validateFirstname (textFirstname)) && (validateLastname (textLastname)) && (validateEmail (textEmail)) && (validateCompetitions (textConcours)) && (validateRadioChecked (locations)) && (selecConditions (conditions)))
  { form.submit();
      const validText = document.querySelector(".valid_soumission");
      validText.style.display = "block";
      validText.innerHTML = "Merci, votre réservation a été reçue!";
      validText.style.color = "green";
    }else{
      return false;
    }
};