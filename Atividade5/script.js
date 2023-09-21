let qtdVisita = localStorage.getItem('acessos');

if(qtdVisita === undefined || qtdVisita === "NaN"){
    qtdVisita = 0;
}

qtdVisita++;
localStorage.setItem('acessos', qtdVisita);

