document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var campoA = parseInt(document.getElementById('campoA').value);
    var campoB = parseInt(document.getElementById('campoB').value);
    var mensagemElement = document.getElementById('mensagem');

    if (!isNaN(campoA) && !isNaN(campoB)) {
        var mensagem = campoB > campoA ? "Formulário válido!" : "Número B deve ser maior que número A!";
        var success = campoB > campoA;
        exibirMensagem(mensagemElement, mensagem, success);
    } else {
        exibirMensagem(mensagemElement, "Por favor, insira números válidos!", false);
    }
});

function exibirMensagem(elemento, mensagem, sucesso) {
    elemento.textContent = mensagem;
    elemento.classList.remove('error-message', 'success-message');
    elemento.classList.add(sucesso ? 'success-message' : 'error-message');
}

