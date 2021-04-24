//get  all items

function myfunction() {
    let x = document.querySelector(".all-items")
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.animationName = "frank"
    } else {
        x.style.display = "none";
        x.style.animationName = "eze"
    }
}



// my form validation 
const sendBtn = document.getElementsByClassName('btn-form'),
    Email = document.getElementById('email'),
    LastName = document.getElementById('last-name'),
    FirstName = document.getElementById('first-name'),
    Number = document.getElementById('number'),
    Message = document.getElementById('message'),
    REsetemailBtn = document.getElementById('reset-btn'),
    sendEmailForm  = document.getElementById('send-form');

// variebles 


//eventlistener

eventlisteners();

function eventlisteners() {
    //app init
    document.addEventListener('DOMcontentloaded', appInit);

    //validate the form

    Email.addEventListener('blur', validatefield);
    LastName.addEventListener('blur', validatefield);
    FirstName.addEventListener('blur', validatefield);
    number.addEventListener('blur', validatefield);
    Message.addEventListener('blur', validatefield);
    
}

// function
function appInit() {
    //app initialization
  sendBtn.preventDefault(); 
}

//validate the field

function validatefield() {
    let  errors;
    
  //valiadte the length of the field

  validateLegnth(this);

  //validate email 
  if (this.type === "email") {
      validateEmail(this);
  }
}



// valiadate 

function validateLegnth(field) {
    if (field.value.length > 0) {
        field.style.borderBottomColor = "green";
        field.classList.remove('error');
    } else {
      field.style.borderBottomColor = "red";
      field.classList.add('error');
    }
}

 function validateEmail(field) {
    let Emailtext = field.value;

    if(Emailtext.indexOf('@') !== -1) {
        field.style.borderBottomColor = "green";
        field.classList.remove('error');
    } else {
      field.style.borderBottomColor = "red";
      field.classList.add('error');
    }
}
