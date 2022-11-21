function moverPosicionRandom(element){
    element.style.position = 'absolute';
    element.style.top = Math.random() * (window.innerHeight - element.offsetHeight) + 'px';
    element.style.left = Math.random() * (window.innerWidth - element.offsetWidth) + 'px';
}

let btnSi = document.getElementById('btn_si');
let btnNo = document.getElementById('btn_no');
let divActivado = document.getElementsByClassName('switch')[0];

btnNo.addEventListener('mouseenter',(e)=>{
    moverPosicionRandom(e.target)
});

btnSi.addEventListener('click',(e)=>{
    alert('Sabía que dirías que sí :)');
    divActivado.style.display = 'block';
    const cancion = new Audio('./src/cancion.mp3');
    cancion.play();
});