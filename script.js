document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "Sandro" && password === "Sandro2025") {
        alert("✅ Bem-vindo à Sandro Motors!");
    } else {
        alert("❌ Usuário ou senha incorretos.");
    }
});
