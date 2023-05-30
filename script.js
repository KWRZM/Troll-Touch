const button = document.querySelector('.glowing-btn');
const background = document.getElementById('BG');
const audio = document.getElementById('Audio');

let enAttente = false;
let max = 5;
let cpt = 0;

button.addEventListener('mouseover', (e) => {

    // Anti-Spam
    if(enAttente)return;



    let largeur = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let hauteur = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    let newHeight  = Math.random() * (hauteur - 100);
    let newWidth = Math.random() * (largeur - 200);

    button.style.top = `${newHeight}px`;
    button.style.left = `${newWidth}px`;

    console.log(`x= ${button.offsetLeft} y= ${button.offsetTop}`);


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
    }, 200);

});


function AmongUs(){
    audio.play();
}