document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "Sandro" && password === "Sandro2025") {
        alert("✅ Bem-vindo à Sandro Motors!");
        // window.location.href = "painel.html"; // Redirecionamento opcional
    } else {
        alert("❌ Usuário ou senha inválidos. Tente novamente.");
    }
});
