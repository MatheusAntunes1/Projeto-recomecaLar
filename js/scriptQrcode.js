// Seleciona os elementos
const qrModal = document.getElementById("qrModal");
const qrButton = document.getElementById("qrButton");
const closeModal = document.querySelector(".close");

// Quando o botão de doação é clicado
qrButton.onclick = function () {
    qrModal.style.display = "flex"; // Mostra o modal
    qrButton.style.display = "none"; // Oculta o botão
};

// Quando o botão de fechar é clicado
closeModal.onclick = function () {
    qrModal.style.display = "none"; // Oculta o modal
    qrButton.style.display = "inline-block"; // Mostra o botão novamente
};

// Fecha o modal se clicar fora do conteúdo
window.onclick = function (event) {
    if (event.target === qrModal) {
        qrModal.style.display = "none";
        qrButton.style.display = "inline-block";
    }
};
