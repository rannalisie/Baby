function changePicture() {
    var image = document.getElementById("image");
    image.src = "img/My Grumpy Baby.png";

    // Exibir a página extra
    var extraPage = document.getElementById('extraPage');
    extraPage.style.display = 'block';

    // Exibir um alerta como resposta
    alert(" Se cansar, dorme que passa... porque o não realmente nem era uma opção. \nBrincadeiras a parte, os termos de adesão e os contratos são os mesmos. \nE qualquer duvida ou reclamação o SAC é 24/7 aberto para você! \nVamos construir felicidade princesa.");
}

function moveAndShowAlert() {
    var button = document.getElementById("no");

    // Definir posições aleatórias
    var randomX = Math.floor(Math.random() * (window.innerWidth - button.clientWidth));
    var randomY = Math.floor(Math.random() * (window.innerHeight - button.clientHeight));

    // Aplicar a transformação para mover o botão
    button.style.position = "absolute"; // Certifique-se de que o botão tenha a posição absoluta
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";

    // Exibir um alerta como resposta
    alert("Are you sure? Think about it!");
}


// Adicionar um ouvinte de evento para o botão "No"
var noButton = document.getElementById("no");
noButton.addEventListener("click", function() {
    moveButton();
});