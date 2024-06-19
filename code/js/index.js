// Função para validar o login
function validarLogin() {
  // Obtém o valor do campo de e-mail do formulário de login
  let email = document.getElementById("loginEmail").value;
  // Obtém o valor do campo de senha do formulário de login
  let senha = document.getElementById("loginSenha").value;
  // Obtém o e-mail armazenado no localStorage
  let armazenadoEmail = localStorage.getItem("email");
  // Obtém a senha armazenada no localStorage
  let armazenadoSenha = localStorage.getItem("senha");

  // Verifica se o e-mail e a senha inseridos correspondem aos armazenados
  if (email.trim() === armazenadoEmail.trim() && senha.trim() === armazenadoSenha) {
      // Exibe uma mensagem de sucesso
      alert("Login bem sucedido");
      // Redireciona para a página principal
      window.location.href = "main.html";
      // Retorna false para prevenir o envio do formulário
      return false;
  } else {
      // Exibe uma mensagem de erro
      alert("E-mail ou senha incorretos");
      // Retorna false para prevenir o envio do formulário
      return false;
  }
}

// Função para lidar com a resposta de credenciais do Google
function handleCredentialResponse(response) {
  // Exibe o token JWT codificado no console
  console.log("Encoded JWT ID token: " + response.credential);
  // Redireciona para a página principal após o login com o Google
  window.location.href = "main.html";
}
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "769343160023-417pbu92h84q5lo8seo29fhgkaapl16q.apps.googleusercontent.com", // id do cliente
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton( // buttão google
      document.getElementById("buttonDiv"),  // estilização do botão 
      { 
        
        type:"standard",
        shape:"rectangular",
        theme:"filled_blue",
        text:"signin_with",
        size:"medium",
        locale:"pt-BR"
     }  
    );
  }

