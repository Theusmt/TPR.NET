// Adiciona um ouvinte de eventos ao formulário com id 'form' para o evento de submissão
document.getElementById('form').addEventListener('submit', function(event) {
    // Previne o comportamento padrão do formulário (envio)
    event.preventDefault();
    // Verifica se o formulário é válido
    if (validarFormulario()) {
       // Redireciona para a página 'Index.html' se o formulário for válido
       window.location.href = "Index.html";
    } else {
       // Caso o formulário não seja válido, nada acontece
    }
});

// Função para validar o formulário
function validarFormulario() {
    // Obtém o valor do campo 'nome' do formulário
    var nome = document.getElementById("nome").value;
    // Obtém o valor do campo 'email' do formulário
    var email = document.getElementById("email").value;
    // Obtém o valor do campo 'senha' do formulário
    var senha = document.getElementById("senha").value;

    // Verifica se o campo 'nome' está vazio
    if (nome === "") {
        // Exibe um alerta se o campo 'nome' estiver vazio
        alert("Preencha o campo nome");
        // Retorna falso para indicar que o formulário não é válido
        return false;
    // Verifica se o e-mail é válido
    } else if (!validarEmail(email)) {
        // Exibe um alerta se o e-mail for inválido
        alert("Preencha o campo email corretamente");
        // Retorna falso para indicar que o formulário não é válido
        return false;
    }

    // Verifica se o campo 'senha' está vazio
    if (senha === "") {
        // Exibe um alerta se o campo 'senha' estiver vazio
        alert("Preencha o campo senha");
        // Retorna falso para indicar que o formulário não é válido
        return false;
    // Verifica se a senha é válida
    } else if (!validarSenha(senha)) {
        // Exibe um alerta se a senha for inválida
        alert("A senha deve ter no mínimo 8 caracteres, incluindo uma letra maiúscula, uma minúscula e um caractere especial");
        // Retorna falso para indicar que o formulário não é válido
        return false;
    }

    // Armazena o nome no localStorage
    localStorage.setItem("nome", nome);
    // Armazena o e-mail no localStorage
    localStorage.setItem("email", email);
    // Armazena a senha no localStorage
    localStorage.setItem("senha", senha);
    // Exibe um alerta de sucesso
    alert("Cadastro realizado com sucesso!");
    // Retorna verdadeiro para indicar que o formulário é válido
    return true;
}

// Função para validar o e-mail
function validarEmail(email) {
    // Verifica se o e-mail contém um '@' e um '.'
    return email.includes("@") && email.includes(".");
}

// Função para validar a senha
function validarSenha(senha) {
    // Verifica se a senha tem pelo menos 8 caracteres, inclui números, letras minúsculas, letras maiúsculas e caracteres especiais
    return senha.length >= 8 && /[0-9]/.test(senha) && /[a-z]/.test(senha) && /[A-Z]/.test(senha) && /\W/.test(senha);
}
