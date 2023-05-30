const button = document.querySelector('.glowing-btn');
const background = document.getElementById('BG');
const audio = document.getElementById('Audio');
const container = document.querySelector('.container');

let enAttente = false;
let max = 5;
let cpt = 0;

container.addEventListener('mouseover', (e) => {

    // Anti-Spam
    if(enAttente)return;



    let largeur = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let hauteur = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    let newHeight  = Math.random() * (hauteur - 100);
    let newWidth = Math.random() * (largeur - 200);

    container.style.top = `${newHeight}px`;
    container.style.left = `${newWidth}px`;

    console.log(`x= ${container.offsetLeft} y= ${container.offsetTop}`);


    if(cpt >= max){
        background.classList.add("visible");
        AmongUs();
        cpt = 0;
        max = 15;
    }

    cpt++;


    // Timer for Anti-Spam system
    enAttente = true;
    timerId = setTimeout(function() {
        enAttente = false;
    }, 100);

});


function AmongUs(){
    audio.play();
}