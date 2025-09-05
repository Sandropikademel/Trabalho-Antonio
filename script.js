document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Sandro" && password === "Sandro2025") {
        alert("✅ Login realizado com sucesso! Bem-vindo, Sandro.");
        // Aqui você pode redirecionar se quiser
        // window.location.href = "dashboard.html";
    } else {
        alert("❌ Usuário ou senha incorretos. Tente novamente.");
    }
});
