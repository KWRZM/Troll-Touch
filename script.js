
const button = document.querySelector('.glowing-btn');

button.addEventListener('mouseover', (e) => {
    let largeur = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let hauteur = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    let newHeight  = Math.random() * (hauteur - 100);
    let newWidth = Math.random() * (largeur - 200);

    button.style.top = `${newHeight}px`;
    button.style.left = `${newWidth}px`;

    console.log(`x= ${button.offsetLeft} y= ${button.offsetTop}`);
});