document.addEventListener('DOMContentLoaded', function () {
    const clienteOption = document.getElementById('usur');
    const windowContent = document.getElementById('window-content');

    clienteOption.addEventListener('click', function () {
        // Substitui o conteúdo atual da janela pelo formulário de cadastro do cliente
        windowContent.innerHTML = `
            <h2>Cadastro de Cliente</h2>
            <form>
                <label for="nome">Razão Social:</label><br>
                <input type="text" id="nome" name="nome" required><br>
                <label for="Fantasia">Fantasia:</label><br>
                <input type="text" id="nome" name="nome" required><br>
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email" required><br>
                <label for="cnpj">CNPJ:</label><br>
                <input type="text" id="cnpj" name="cnpj" maxlength="18" oninput="formatarCnpj(this)" required><br>
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
            </form>
        `;
    });
});

// Função para formatar o CNPJ ao digitar
function formatarCnpj(cnpjInput) {
    let cnpj = cnpjInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    cnpj = cnpj.replace(/^(\d{2})(\d)/, '$1.$2'); // Coloca ponto entre o segundo e o terceiro dígitos
    cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3'); // Coloca ponto entre o quinto e o sexto dígitos
    cnpj = cnpj.replace(/\.(\d{3})(\d)/, '.$1/$2'); // Coloca a barra entre o oitavo e o nono dígitos
    cnpj = cnpj.replace(/(\d{4})(\d)/, '$1-$2'); // Coloca o hífen depois do bloco de quatro dígitos
    cnpjInput.value = cnpj;
}

function goBack() {
    window.history.back();
}

