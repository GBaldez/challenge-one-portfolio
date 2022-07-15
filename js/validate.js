//Seu JavaScript de validação aqui
const form = document.querySelector('.formcontato__form');
const inputField = document.querySelectorAll('.formcontato__item');
const nameInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('assunto');
const msgInput = document.getElementById('mensagem');
const button = document.querySelector('.formcontato__botao');

const msgError = (el, msg, i) => {
    if(el.classList.contains('error')) return;
    el.classList.add('error');
    const errorMessage = document.createElement('span');
    errorMessage.classList.add('error-message');
    errorMessage.innerHTML = msg;
    inputField[i].appendChild(errorMessage);
    inputField[i].children[0].style.color = 'red';
}
const removeErrStyle = (el, i) => {
        el.classList.remove('error');
        inputField[i].children[2].remove();
        inputField[i].children[0].style.color = 'var(--second-color)';
    }

const validateNameAndSubject = (input,i) => {
     if(input.value.length > 49){
        msgError(input, 'Máximo de 50 caracteres para este campo', i);
     } else if(input.value.length === 0) {
        msgError(input, 'Esse campo não pode ficar em branco', i)
     } else if(!input.value.match(/^[a-zA-Z\s]+$/)){
        msgError(input, 'Somente letras neste campo', i);
     }  else if(input.classList.contains('error')){
            removeErrStyle(input, i);
    }
    }

const validateEmail = () => {
    const emailValid = new RegExp( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    if (!emailValid.test(emailInput.value)) {
        msgError(emailInput, 'E-mail inválido', 1); 
    } else {
        removeErrStyle(emailInput, 1);
    }
}
const validateMsg = () => {
    if(msgInput.value.length > 499){
        msgError(msgInput, 'Máximo de 500 caracteres para este campo', 3);
    } else if(msgInput.value.length === 0) {
        msgError(msgInput, 'Esse campo não pode ficar em branco', 3);
    } else {
        removeErrStyle(msgInput, 3);
    }
}

form.addEventListener('focusout', (e) => {
    console.log(e.target.id);
    if (e.target.id === 'nome') {
        validateNameAndSubject(nameInput, 0);
    }
    if (e.target.id === 'email') {
        validateEmail();
    }
    if (e.target.id === 'assunto') {
        validateNameAndSubject(subjectInput, 2);
    }
    if (e.target.id === 'mensagem') {
        validateMsg();
    }
}
);


const formValidation = () => {
    if(nameInput.value.length === 0 || emailInput.value.length === 0 || subjectInput.value.length === 0 || msgInput.value.length === 0){
        alert('Preencha todos os campos');
        button.disabled = true;
        console.log(button.disabled);
    }
    button.disabled = false;
}

button.addEventListener('click', formValidation);

