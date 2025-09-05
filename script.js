// script.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Validação do login
        if (username === 'sandro' && password === '01011990') {
            showMessage('Login realizado com sucesso!', 'success');
            
            // Limpar o formulário
            loginForm.reset();
            
            // Simular redirecionamento (em um sistema real, redirecionaria para outra página)
            setTimeout(function() {
                alert('Bem-vindo ao sistema, Sandro!');
            }, 1000);
            
        } else {
            showMessage('Usuário ou senha incorretos!', 'error');
        }
    });
    
    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = 'message ' + type;
        messageDiv.classList.remove('hidden');
        
        // Esconder a mensagem após 5 segundos
        setTimeout(function() {
            messageDiv.classList.add('hidden');
        }, 5000);
    }
});