// scripts.js

document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário recarregue a página

    // Captura os valores do formulário
    var commentText = document.getElementById('comment-text').value;
    var commentAuthor = document.getElementById('comment-author').value;

    // Validação simples
    if (!commentText.trim() || !commentAuthor.trim()) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Cria um novo elemento de comentário
    var commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerHTML = `
        <h3>${commentAuthor}</h3>
        <p>${commentText}</p>
    `;

    // Adiciona o comentário à seção de comentários
    document.getElementById('comment-section').appendChild(commentElement);

    // Limpa o formulário
    document.getElementById('comment-text').value = '';
    document.getElementById('comment-author').value = '';
});
