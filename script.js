document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Sandro" && password === "Sandro2025") {
        alert("✅ Login realizado com sucesso! Bem-vindo, Sandro.");
        // window.location.href = "dashboard.html"; // Redirecionamento opcional
    } else {
        alert("❌ Usuário ou senha incorretos. Tente novamente.");
    }
});
