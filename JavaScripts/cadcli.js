document.addEventListener('DOMContentLoaded', function () {
    const clienteOption = document.getElementById('cliente');
    const windowContent = document.getElementById('window-content');
    const goBackBtn = document.getElementById('go-back-btn');

    clienteOption.addEventListener('click', function () {
        // Substitui o conteúdo atual da janela pelo formulário de cadastro do cliente
        windowContent.innerHTML = `
            <h2>Cadastro de Cliente</h2>
            <form>
                <label for="nome">Nome:</label><br>
                <input type="text" id="nome" name="nome" required><br>
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email" required><br>
                <label for="cpf">CPF:</label><br>
                <input type="text" id="cpf" name="cpf" maxlength="14" oninput="formatarCpf(this)" required><br>
                <label for="endereco">Endereço:</label><br>
                <input type="text" id="endereco" name="endereco" required><br>
                <label for="bairro">Bairro:</label><br>
                <input type="text" id="bairro" name="bairro" required><br>
                <label for="rua">Rua:</label><br>
                <input type="text" id="rua" name="rua" required><br>
                <label for="casa">Número da Casa:</label><br>
                <input type="text" id="casa" name="casa" required><br>
                <label for="telefone">Telefone:</label><br>
                <input type="tel" id="telefone" name="telefone" required><br>
                <label for="senha">Senha:</label><br>
                <input type="password" id="senha" name="senha" required><br><br>
                <input type="submit" value="Cadastrar" class="btn-cadastrar">
                



                <button id="reloadButton">&larr;</button>
            </form>
        `;
        const reloadBtn = document.getElementById('reloadButton');
        reloadBtn.addEventListener('click', function() {
            window.location.reload(); // Isso recarregará a página
        });
    });

    goBackBtn.addEventListener('click', function() {
        goBack();
    });
});

// Função para voltar à página anterior
function goBack() {
    window.history.back();
}



// Função para formatar o CPF ao digitar
function formatarCpf(cpfInput) {
    let cpf = cpfInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Insere o primeiro ponto
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Insere o segundo ponto
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Insere o hífen
    cpfInput.value = cpf;
}
function goBack() {
    window.history.back();
}
