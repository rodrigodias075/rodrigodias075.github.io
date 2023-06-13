const simBtn = document.getElementById("sim-btn"); // const declarando variável 
const naoBtn = document.getElementById("nao-btn");
const resposta = document.getElementById("resposta");

naoBtn.addEventListener("mousemove", function() { // function para funcionar o codigo
    const maxX = Math.min(100, window.innerWidth - 100);
    const maxY = Math.min(100, window.innerHeight - 100);
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    naoBtn.style.transform = `translate(${newX}px, ${newY}px)`;
});

simBtn.addEventListener('click', () => {
    const audio = new Audio('/audio.mp4'); 
    audio.play();
});
