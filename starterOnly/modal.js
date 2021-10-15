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
textFirstname.addEventListener("input", function() {
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

textBirthdates.addEventListener("change", function(){
  validateBirth(this)
});

function validateBirth (textBirthdates){
  let birthValue = textBirthdates.value;
  let birthYear = birthValue.split("-")[0];
  let now = new Date();
  let nowYear = now.getFullYear();
  let diffYear = Math.abs(nowYear - birthYear);
if (diffYear <= 120){
  birthdateInvalid.innerHTML = "";
  return true;
}else{
  birthdateInvalid.innerHTML = "L'année n'est pas valide.";
  birthdateInvalid.style.color = "red";
  return false;
  }
};

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
    return true;
  }
};
    //********* validation bouton radio ************
    //getting field location => Array locations
    const locations = document.querySelectorAll(".location");
    //getting field invalid text
    const validCheckVille = document.querySelector(".validation_checkbox_ville");

    function validateRadioChecked(inputradio){
      //transform the string in an integer
      let resConcours = parseInt(textConcours.value, 10);
      //resConcours is Not A Number
      if (Number.isNaN(resConcours)) {
        concoursInvalid.innerHTML = "";
        validCheckVille.innerHTML = "";
        return NaN;

      }else{
        if(resConcours === 0){ //resConcours = 0 so no need to check a radio
          concoursInvalid.innerHTML = "";
          validCheckVille.innerHTML = "";
          return true;
        }else{
          validCheckVille.innerHTML = "Veuillez sélectionner une ville";
          validCheckVille.style.color = "red";
          //listening to a change from the radio button
          for(let i = 0; i < locations.length; i++){
              if(locations[i].checked === true){
                validCheckVille.innerHTML = "";
                return true;
              }else{
                for(let i = 0; i < locations.length; i++){
                  locations[i].addEventListener("input", function() {
                    if(locations[i].checked === true){
                      validCheckVille.innerHTML = "";
                      return true;
                    }else{
                      return false;
                    };
                  });
                };
              };        
          };
        };
      }
    };

//********* validation terms of use ************
//getting field checkbox1
const conditions = document.getElementById("checkbox1");
//getting field invalid text
const validConditions = document.querySelector(".validation_conditions");

//listening to a change from the button conditions d'utilisation
conditions.addEventListener("click", function(){
  selectConditions(this);
});

function selectConditions(inputconditions){
  if(conditions.checked === true){
    validConditions.innerHTML = "";
    return true;
  }else{
    validConditions.innerHTML = "Veuillez sélectionner les conditions d'utilisation";
    validConditions.style.color = "red";
    return false;
  }
};

//********* validation formulaire ************
const formSubmit = document.querySelector(".btn-submit");
const form = document.querySelector("form");
const validText = document.querySelector(".submit_text");
//getting field to close the validation submission form
const submitClose = document.querySelector(".close.submited");

// close validation submission form
submitClose.addEventListener("click", closeSubmission); 
  
function closeSubmission() {
  validText.style.display = "none";
};

formSubmit.addEventListener("submit", function(e){
  e.preventDefault();
  validate(this);
});

function validate(e){
  if((validateFirstname (textFirstname)) && (validateLastname (textLastname)) && (validateEmail (textEmail)) && (validateCompetitions (textConcours)) && (validateBirth (textBirthdates)) && (validateRadioChecked (locations)) && (selectConditions (conditions)))
  { form.submit();
    return true;
  }else{
      if(validateFirstname (textFirstname) === false){
        firstnameInvalid.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du firstname.";
        firstnameInvalid.style.color = "red";
      };
      if(validateLastname (textLastname) === false){
        lastnameInvalid.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        lastnameInvalid.style.color = "red";
      };
      if(validateEmail (textEmail) === false){
        emailInvalid.innerHTML = "L'adresse électronique est invalide.";
        emailInvalid.style.color = "red";
      };
      if(validateBirth (textBirthdates) === false){
        birthdateInvalid.innerHTML = "L'année n'est pas valide.";
        birthdateInvalid.style.color = "red";
      };
      if(validateCompetitions (textConcours) === false){
        concoursInvalid.innerHTML = "Une valeur numérique doit être saisie.";
        concoursInvalid.style.color = "red";
      };
      if(validateRadioChecked (locations) === false){
      for(let i = 0; i < locations.length; i++){
        locations[i].addEventListener("input", function(){
          if(locations[i].checked === false){
            validCheckVille.innerHTML = "Veuillez sélectionner une ville";
            validCheckVille.style.color = "red";
          }
        });
      };
      };
      if(selectConditions (conditions) === false){
        validConditions.innerHTML = "Veuillez sélectionner les conditions d'utilisation";
        validConditions.style.color = "red";
      };
      return false;
    }
};

function validateSubmit(){
  if(validate(form) === true){
    validText.style.display = "block";
  };
};
