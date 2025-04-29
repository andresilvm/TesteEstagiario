function aplicarMascaraTelefone(input) {
  input.addEventListener("input", function () {
    let valor = input.value.replace(/\D/g, "");
    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length > 6) {
      input.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
    } else if (valor.length > 2) {
      input.value = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
    } else {
      input.value = `(${valor}`;
    }
  });
}

function validarTelefone(telefone) {
  const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
  return regex.test(telefone);
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validarNome(nome) {
  const regex = /^[a-zA-ZÀ-ÿ\s]+$/;
  return regex.test(nome);
}

function exibirErro(elementId, mensagem) {
  const erroElement = document.getElementById(elementId);
  erroElement.textContent = mensagem;
  erroElement.classList.remove("hidden");
}

function esconderErro(elementId) {
  const erroElement = document.getElementById(elementId);
  erroElement.classList.add("hidden");
}

function marcarInputComoErro(inputId) {
  const input = document.getElementById(inputId);
  input.classList.add("border-red-500");
}

function desmarcarInputComoErro(inputId) {
  const input = document.getElementById(inputId);
  input.classList.remove("border-red-500");
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("forms");
  const telefoneInput = document.getElementById("phone");
  aplicarMascaraTelefone(telefoneInput);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("phone").value.trim();

    let valid = true;

    esconderErro("form-error");
    esconderErro("name-error");
    esconderErro("email-error");
    esconderErro("phone-error");
    desmarcarInputComoErro("name");
    desmarcarInputComoErro("email");
    desmarcarInputComoErro("phone");

    if (!nome || !email || !telefone) {
      exibirErro("form-error", "Por favor, preencha todos os campos.");
      return;
    }

    const campos = [
      { id: "name", valor: nome, validacao: validarNome, erroId: "name-error", erroMensagem: "Nome inválido. Use apenas letras e espaços." },
      { id: "email", valor: email, validacao: validarEmail, erroId: "email-error", erroMensagem: "Email inválido. Digite um email no formato correto." },
      { id: "phone", valor: telefone, validacao: validarTelefone, erroId: "phone-error", erroMensagem: "Telefone inválido. Digite no formato (XX) XXXXX-XXXX." }
    ];

    campos.forEach((campo) => {
      if (!campo.validacao(campo.valor)) {
        exibirErro(campo.erroId, campo.erroMensagem);
        marcarInputComoErro(campo.id);
        valid = false;
      }
    });

    if (valid) {
      const dados = { nome, email, telefone };
      console.log("Dados enviados:", dados);
      form.style.display = "none";
      document.getElementById("sucess").style.display = "block";
    }
  });
});
