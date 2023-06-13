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
    const newWindow = window.open("", "_blank", "width=400,height=200");
    newWindow.document.write("<p>Áudio está sendo reproduzido...</p>");

    const audio = newWindow.document.createElement("audio");
    const source = newWindow.document.createElement("source");
    source.src = "C:\\Users\\ALUNO\\Desktop\\QUA.315.030\\question\\audio.mp4";
    source.type = "video/mp4";
    audio.appendChild(source);
    audio.controls = true;

    newWindow.document.body.appendChild(audio);
    audio.play();
});
