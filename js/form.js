// formulario de contacto

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});


const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');

function validateName(){
    const name = document.getElementById('contact-name').value;
    console.log(name)

    if(name.length == 0){
        nameError.innerHTML = 'Ingresa tu nombre y apellido';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Ingresa tu nombre completo';
        return false;
    }
    
    nameError.innerHTML = '<i style="color: seagreen" class="fa-solid fa-square-check"></i>';
    return true;
}

function validatePhone(){
    const phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Ingresa tu celular';
        return false;
    }
    
    if(!phone.match(/^\d{7,14}$/)){
        phoneError.innerHTML = 'Solo numeros de 7 a 14 digitos';
        return false;
    }

    phoneError.innerHTML = '<i style="color: seagreen" class="fa-solid fa-square-check"></i>';
    return true;
}

function validateEmail(){
    const email = document.getElementById('contact-email').value;
    
    if(email.length == 0){
        emailError.innerHTML = 'Ingresa tu mail';
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)){
        emailError.innerHTML = 'Mail invalido';
        return false;
    }

    emailError.innerHTML = '<i style="color: seagreen" class="fa-solid fa-square-check"></i>';
    return true;

}

function validateMessage(){
    const message = document.getElementById('contact-message').value;
    const required = 30;
    const left = required - message.length;

    if(message.length == 0){
        messageError.innerHTML = 'Ingresa un mensaje';
        return false;
    }
    if(left > 0){
        messageError.innerHTML = `${left} caracteres restantes como mínimo`;
        return false;
    }

    messageError.innerHTML = '<i style="color: seagreen" class="fa-solid fa-square-check"></i>';
    return true;

}


function validateForm(){
    if(!validateName() || !validateEmail() || !validatePhone() ||  !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Porfavor completa el formulario correctamente';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false
    }   
    submitError.innerHTML = '<p style="color:seagreen">Enviado correctamente</p>';
    return true;
}   


var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);