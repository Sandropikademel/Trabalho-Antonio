document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Sandro' && password === 'Sandro2025') {
        alert('✅ Login bem-sucedido! Bem-vindo, Sandro.');
        // Redirecionar para outra página (opcional)
        // window.location.href = 'dashboard.html';
    } else {
        alert('❌ Usuário ou senha incorretos. Tente novamente.');
    }
});
