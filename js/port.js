const header =document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY >0);
});
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll  = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};
 const sr = ScrollReveal ({
    distance: '25 px',
    duration: 2500,
    reset: true
 })

 sr.reveal('.home-text',{delay:190, origin:'bottom'})
 sr.reveal('.about,.services,.contacts',{delay:200, origin:'bottom'})
 const form=document.getElementById("form");
 const name=document.getElementById("name");
 const email=document.getElementById("email");
 const tel=document.getElementById("tel");
 const textarea=document.getElementById("textarea");
 const submit=document.getElementById("submitbtn");
 const log=document.getElementById("log");
 let isValid = false;
 var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //Javascript reGex for Email Validation.
 var regPhone=/^\d{10}$/;									 // Javascript reGex for Phone Number validation.		

 function validateForm() {
  isValid = form.checkValidity();

  if (!isValid) {
    message.textContent = "Please fill out the form corectly!";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
  /*if (name == "" (name)){
    window.alert("Please enter your name.");
    name.focus();
    return false;
  } */ 
  if (email == "" || !regEmail.test(email)) {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }
  
 
}

// function store use information
function storeUser() {
  const user = {
    name: form.name.value,
    tel: form.tel.value,
    email: form.email.value,
    message: form.textarea.value,
  };
  console.log(user);
}

// procssFormData
function procssFormData(event) {
  event.preventDefault();
  validateForm();
  storeUser();
}

// event listeners
form.addEventListener("submit", procssFormData);

//submit event
function logSubmit(event) {
  log.textContent = "Form Submitted succesfully!" ;
  log.textContent.color='red';
  event.preventDefault();
}
form.addEventListener('submit', logSubmit);
//reset the form after data is collected
form.reset();