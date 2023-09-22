let qtdVisita = localStorage.getItem('acessos');
let texto = "Acessos: ";
const button = document.getElementById('mudartema');
const body = document.body;
const telaCentral = document.getElementById('tela-central');

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
    } else {
        body.classList.add('darkmode');
        telaCentral.classList.add('darkmode');
        button.classList.add('darkmode');
    }
});