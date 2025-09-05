document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Remover alertas anteriores
        removeExistingAlerts();
        
        // Credenciais válidas (seu nome como usuário e aniversário como senha)
        const validUsername = 'SeuNome'; // Substitua pelo seu nome
        const validPassword = '01011990'; // Substitua pela sua data de nascimento no formato DDMMAAAA
        
        if (username === validUsername && password === validPassword) {
            showAlert('Login realizado com sucesso!', 'success');
            // Redirecionar após login bem-sucedido (opcional)
            setTimeout(() => {
                // window.location.href = 'pagina-principal.html';
            }, 1500);
        } else {
            showAlert('Usuário ou senha incorretos!', 'error');
        }
    });
    
    function showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert ${type}`;
        alertDiv.appendChild(document.createTextNode(message));
        
        loginForm.appendChild(alertDiv);
        
        // Remover alerta após 3 segundos
        setTimeout(() => {
            alertDiv.remove();
        }, 3000);
    }
    
    function removeExistingAlerts() {
        const existingAlerts = document.querySelectorAll('.alert');
        existingAlerts.forEach(alert => alert.remove());
    }
});