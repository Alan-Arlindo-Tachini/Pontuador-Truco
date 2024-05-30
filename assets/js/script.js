
// let nosso = document.getElementById('nos');

let duplaum = 0;
let dupladois = 0;
let vitorias1 = 0;
let vitorias2 = 0
let timeInMs = new Date().toLocaleTimeString();
let historico = document.getElementById('resultado');
let divVazia = document.getElementById('resultado');
let duplaprimeira = localStorage.getItem('nomedaduplaum');
let duplasegunda = localStorage.getItem('nomedadupladois');

function dados() {
    let duplaprimeira = document.getElementById('dupla1nome').value;

    if (duplaprimeira === '') {
        duplaprimeira = 'Dupla 1: ';
    }

    document.getElementById('teste').innerText = duplaprimeira;

    console.log(duplaprimeira);

    let duplasegunda = document.getElementById('dupla2nome').value;

    if (duplasegunda === '') {
        duplasegunda = 'Dupla 2: ';
    }

    document.getElementById('teste2').innerText = duplasegunda;

    console.log(duplasegunda);

    localStorage.setItem('nomedaduplaum', duplaprimeira);
    localStorage.setItem('nomedadupladois', duplasegunda);
    window.location.href = "jogotruco.html";
}

document.addEventListener('DOMContentLoaded', mudarNome)
function mudarNome() {
    let duplaprimeira = localStorage.getItem('nomedaduplaum');
    let duplasegunda = localStorage.getItem('nomedadupladois');

    if (duplaprimeira) {
        document.getElementById('nomedupla1').innerText = duplaprimeira;
    }

    if (duplasegunda) {
        document.getElementById('nomedupla2').innerText = duplasegunda;
    }

    document.getElementById('nomedupla1baixo').innerText = duplaprimeira;
    document.getElementById('nomedupla2baixo').innerText = duplasegunda

}

function adicionarDupla1(numero) {
    duplaum = numero + duplaum;
    document.getElementById('dupla1').innerText = duplaum;
    
    if (duplaum > 12) {
        duplaum = 0;
        dupladois = 0;
        vitorias1 = 1 + vitorias1
        document.getElementById('vitoria1').innerText = vitorias1;
        document.getElementById('dupla1').innerText = duplaum;
        document.getElementById('dupla2').innerText = dupladois;
        const textNode = document.createTextNode("Dupla " + duplaprimeira + " ganhou  na hora " + timeInMs);
        historico.appendChild(textNode);
        const div = document.createElement('div');
        div.appendChild(textNode);
        historico.appendChild(div);

    }

};

function adicionarDupla2(numero) {
    dupladois = numero + dupladois;
    document.getElementById('dupla2').innerText = dupladois;
    if (dupladois > 12) {
        dupladois = 0;
        duplaum = 0;
        vitorias2 = 1 + vitorias2;
        document.getElementById('vitoria2').innerText = vitorias2;
        document.getElementById('dupla2').innerText = dupladois;
        document.getElementById('dupla1').innerText = duplaum;
        const textNode = document.createTextNode("Dupla " + duplasegunda + " ganhou  na hora " + timeInMs);
        historico.appendChild(textNode);
        const div = document.createElement('div');
        div.appendChild(textNode);
        historico.appendChild(div);
    }
};


function locationreload() {
    window.location.href = "index.html";
}