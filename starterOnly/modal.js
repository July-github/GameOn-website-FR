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
const modalClose = document.querySelector(".content > span");
const hideHeroSection = document.querySelector(".hero-section");
const hideFooter = document.querySelector("footer");
const hideTopnav = document.querySelector(".topnav");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
  hideHeroSection.style.visibility = "hidden";
  hideFooter.style.display = "none";
};

// close modal form
modalClose.addEventListener("click", closeModal); 
  
function closeModal() {
  modalBg.style.display = "none";
  hideFooter.style.display = "block";
  hideHeroSection.style.visibility = "visible";
};

//********* validation firstname ************
//getting field firstname
const textFirstname = document.getElementById("first");
const parentFirst = textFirstname.parentElement;

//listening to a change from the field firstname
textFirstname.addEventListener("input", function() {
  validateFirstname(this);
});

function validateFirstname(inputfirstname) {
  //regex creation
  const regexFirstname = /^[a-zA-ZÀ-ÿ-]{2,}/g;
  //regex test on the field firstname
  const validFirstname = regexFirstname.test(textFirstname.value);
  if(validFirstname === false) {
    textFirstname.setAttribute("data-error-visible", true);
    parentFirst.setAttribute("data-error-visible", true);
    return false;
  }else {
    textFirstname.removeAttribute("data-error-visible");
    parentFirst.removeAttribute("data-error-visible");
    return true;
  }
};

//********* validation lastname ************
//getting field lastname
const textLastname = document.getElementById("last");
const parentLast = textLastname.parentElement;

//listening to a change from the field Lastname
textLastname.addEventListener("change", function() {
  validateLastname(this);
});

function validateLastname(inputlastname) {
  //regex creation
  const regexLastname = /^[a-zA-ZÀ-ÿ-]{2,}/g;
  //regex test on the field Lastname
  const validLastname = regexLastname.test(textLastname.value);
  if(validLastname === false) {
    textLastname.setAttribute("data-error-visible", true);
    parentLast.setAttribute("data-error-visible", true);
    return false;
  }else {
    textLastname.removeAttribute("data-error-visible");
    parentLast.removeAttribute("data-error-visible");
    return true;
  }
};

//********* validation email ************
//getting field email
const textEmail = document.getElementById("email");
const parentEmail = textEmail.parentElement;

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
    textEmail.setAttribute("data-error-visible", true);
    parentEmail.setAttribute("data-error-visible", true);
    parentEmail.removeAttribute("data-error-empty", true);
    return false;
  }else{
    textEmail.removeAttribute("data-error-visible");
    parentEmail.removeAttribute("data-error-visible");
    parentEmail.removeAttribute("data-error-empty", true);
    return true;
  }
};

//********* validation birthdate ************
//getting field birthdate
const textBirthdates = document.getElementById("birthdate");
const parentBirthdates = textBirthdates.parentElement;

textBirthdates.addEventListener("change", function(){
  validateBirth(this);
});

function validateBirth (textBirthdates){
  let birthValue = textBirthdates.value;
  let birthYear = birthValue.split("-")[0];
  let now = new Date();
  let nowYear = now.getFullYear();
  let diffYear = Math.abs(nowYear - birthYear);
  //diffYear is Not A Number
  if (Number.isNaN(diffYear)) {
    textBirthdates.removeAttribute("data-error-visible");
    parentBirthdates.removeAttribute("data-error-visible");
    parentBirthdates.removeAttribute("data-error-empty", true);
    return NaN;
  }
  if ((diffYear <= 120) && (diffYear > 5)){
    textBirthdates.removeAttribute("data-error-visible");
    parentBirthdates.removeAttribute("data-error-visible");
    parentBirthdates.removeAttribute("data-error-jeune-visible", true);
    parentBirthdates.removeAttribute("data-error-empty", true);
    return true;
  }else{
    if(diffYear < 5){
      textBirthdates.setAttribute("data-error-visible", true);
      parentBirthdates.setAttribute("data-error-jeune-visible", true);
      parentBirthdates.removeAttribute("data-error-empty", true);
      parentBirthdates.removeAttribute("data-error-empty", true);
      return false;
    }else{
      textBirthdates.setAttribute("data-error-visible", true);
      parentBirthdates.setAttribute("data-error-visible", true);
      parentBirthdates.removeAttribute("data-error-empty", true);
      parentBirthdates.removeAttribute("data-error-empty", true);
      return false;
    }
  };
};

//********* validation number of competitions ************
//getting field nombre de concours
const textConcours = document.getElementById("quantity");
const parentConcours = textConcours.parentElement;

//listening to a change from the field nombre de concours
textConcours.addEventListener("change", function() {
  validateCompetitions(this);
});

function validateCompetitions(inputconcours) {
  //transform a negative number into a positive
const absConcours = Math.abs(textConcours.value);
  //regex creation
  const regexConcours = /[0-9]/g;
  //regex test on the field nombre de concours
  const validConcours = regexConcours.test(absConcours);
  if(validConcours === false) {
    textConcours.setAttribute("data-error-visible", true);
    parentConcours.setAttribute("data-error-visible", true);
    parentConcours.removeAttribute("data-error-empty", true);
    return false;
  }else{
    validateRadioChecked();
    textConcours.removeAttribute("data-error-visible");
    parentConcours.removeAttribute("data-error-visible");
    parentConcours.removeAttribute("data-error-empty", true);
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
        textConcours.removeAttribute("data-error-visible");
        parentConcours.removeAttribute("data-error-visible");
        parentConcours.removeAttribute("data-error-empty", true);
        return NaN;
      }else{
        if(resConcours === 0){ //resConcours = 0 so no need to check a radio
          textConcours.removeAttribute("data-error-visible");
          parentConcours.removeAttribute("data-error-visible");
          parentConcours.removeAttribute("data-error-empty", true);
          document.getElementById("location1").parentElement.removeAttribute("data-error-visible");
          return true;
        }else{
          document.getElementById("location1").parentElement.setAttribute("data-error-visible", true);
          //listening to a change from the radio button
          for(let i = 0; i < locations.length; i++){
              if(locations[i].checked === true){
                document.getElementById("location1").parentElement.removeAttribute("data-error-visible");
                return true;
              }
            }
          for(let i = 0; i < locations.length; i++){
            locations[i].addEventListener("input", function() {
              if(locations[i].checked === true){
                document.getElementById("location1").parentElement.removeAttribute("data-error-visible");
                return true;
              }else{
                return false;
              };
            });
          };
        };  
      };
    };
    

//********* validation terms of use ************
//getting field checkbox1
const conditions = document.getElementById("checkbox1");

//listening to a change from the button conditions d'utilisation
conditions.addEventListener("click", function(){
  selectConditions(this);
});

function selectConditions(inputconditions){
  if(conditions.checked === true){
    document.getElementById("checkbox1").parentElement.removeAttribute("data-error-visible");
    return true;
  }else{
    document.getElementById("checkbox1").parentElement.setAttribute("data-error-visible", true);
    return false;
  }
};

//********* validation formulaire ************
const formSubmit = document.querySelector(".btn-submit");
const form = document.querySelector("form");
const validText = document.querySelector(".submit_merci");
//getting field to close the validation submission form
const submitClose = document.querySelector(".submited");
const submitCloseButton = document.querySelector(".merci");

// close validation submission form
submitClose.addEventListener("click", function() {
  closeMerci(this);
}); 
submitCloseButton.addEventListener("click", function() {
  closeMerci(this);
});  

function closeMerci() {
  validText.style.display = "none";
  hideFooter.style.display = "block";
  hideHeroSection.style.visibility = "visible";
};

formSubmit.addEventListener("click", function(e){
  e.preventDefault();
  validate(this);
});

function validate(){
  if((validateFirstname (textFirstname)) && (validateLastname (textLastname)) && (validateEmail (textEmail)) && (validateCompetitions (textConcours)) && (validateBirth (textBirthdates)) && (validateRadioChecked (locations)) && (selectConditions (conditions)))
  { closeModal();
    form.reset();
    validText.style.display = "block";
    hideHeroSection.style.visibility = "hidden";
    hideFooter.style.display = "none";
  }else{
      if(validateFirstname (textFirstname) === false){
        textFirstname.setAttribute("data-error-visible", true);
        parentFirst.setAttribute("data-error-visible", true);
      };
      if(validateLastname (textLastname) === false){
        textLastname.setAttribute("data-error-visible", true);
        parentLast.setAttribute("data-error-visible", true);
      };
      if(validateEmail (textEmail) === false){
        textEmail.setAttribute("data-error-visible", true);
        parentEmail.setAttribute("data-error-visible", true);
      };
        if(validateEmail (textEmail) == ""){
          textEmail.setAttribute("data-error-visible", true);
          parentEmail.setAttribute("data-error-empty", true);
        };
      if(validateBirth (textBirthdates) === false){
        textBirthdates.setAttribute("data-error-visible", true);
        parentBirthdates.setAttribute("data-error-visible", true);
      };
          if(validateBirth (textBirthdates) == ""){
            textBirthdates.setAttribute("data-error-visible", true);
            parentBirthdates.setAttribute("data-error-empty", true);
          };
      if(validateCompetitions (textConcours) === false){
        textConcours.setAttribute("data-error-visible", true);
        parentConcours.setAttribute("data-error-visible", true);
      };
        if(validateCompetitions (textConcours) === ""){
          textConcours.setAttribute("data-error-visible", true);
          parentConcours.setAttribute("data-error-empty", true);
        };
      if(validateRadioChecked (locations) === false){
        document.getElementById("location1").parentElement.setAttribute("data-error-visible", true);
          };
      if(selectConditions (conditions) === false){
        document.getElementById("checkbox1").parentElement.setAttribute("data-error-visible", true);
      };
  };
};