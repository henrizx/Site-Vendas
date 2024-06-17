document.getElementById('reset-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const messageDiv = document.getElementById('message');

    // Simulação de envio de email (substitua por uma chamada real ao servidor)
    setTimeout(function() {
        messageDiv.textContent = `Um código de redefinição de senha foi enviado para ${email}`;
    }, 1000);
});
function goBack() {
    window.history.back();
}