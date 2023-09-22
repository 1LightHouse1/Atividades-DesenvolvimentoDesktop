let qtdVisita = localStorage.getItem('acessos');
let tema = localStorage.getItem('darkmmode');
let texto = "Acessos: ";
const button = document.getElementById('mudartema');
const body = document.body;
const telaCentral = document.getElementById('tela-central');

let savetheme = localStorage.getItem('theme');

if (savetheme) {
     body.classList.add(savetheme);
}

if(qtdVisita === undefined || qtdVisita === "NaN"){
    qtdVisita = 0;
}

qtdVisita++;
localStorage.setItem('acessos', qtdVisita);

document.getElementById('acessos').innerHTML =  texto + qtdVisita;

button.addEventListener('click', () =>{
    if(body.classList.contains('darkmode')){
        body.classList.remove('darkmode');
        telaCentral.classList.remove('darkmode');
        button.classList.remove('darkmode');
        localStorage.setItem('theme', '');
    } else {
        body.classList.add('darkmode');
        telaCentral.classList.add('darkmode');
        button.classList.add('darkmode');
        localStorage.setItem('theme', 'darkmode');
    }
});