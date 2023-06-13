const simBtn = document.getElementById("sim-btn");
const naoBtn = document.getElementById("nao-btn");
const resposta = document.getElementById("resposta");

naoBtn.addEventListener("mousemove", function() {
    const maxX = Math.min(100, window.innerWidth - 100);
    const maxY = Math.min(100, window.innerHeight - 100);
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    naoBtn.style.transform = `translate(${newX}px, ${newY}px)`;
});

simBtn.addEventListener('click', () => {
    const simBtn = document.getElementById("sim-btn");
    const naoBtn = document.getElementById("nao-btn");
    const resposta = document.getElementById("resposta");
    
    naoBtn.addEventListener("mousemove", function() {
        const maxX = Math.min(100, window.innerWidth - 100);
        const maxY = Math.min(100, window.innerHeight - 100);
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;
        naoBtn.style.transform = `translate(${newX}px, ${newY}px)`;
    });
    
    simBtn.addEventListener('click', () => {
        resposta.textContent = "Áudio está sendo reproduzido...";
    
        const audio = new Audio();
        audio.src = 'C:/Users/ALUNO/Desktop/QUA.315.030/question/audio.mp4';
        audio.play();
    });
    
});
