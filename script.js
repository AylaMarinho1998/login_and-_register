const cadastro = document.querySelector('#cdt');

const cadastro1 = document.querySelector('#cdtw');

const enviar = document.querySelector('#env');

const form2 = document.querySelector('.form2');
const form = document.querySelector('.form');

function alt(){
    form2.classList.toggle('hide');
    form.classList.toggle('hide');
    
}
function alt2(){
    form2.classList.toggle('hide');
    form.classList.toggle('hide');
}

function subt(){
    form2.classList.toggle('hide');
    form.classList.toggle('hide');
}

cadastro.addEventListener('click', () => {

    alt();
   
});

cadastro1.addEventListener('click', () => {
    alt2();
   
});

enviar.addEventListener('click', () => {
    subt();
});

