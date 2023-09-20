const form = document.querySelector("#form")
const inputNome = document.querySelector("#nome")
const inputEmail = document.querySelector("#email")
const inputTelefone = document.querySelector("#telefone")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (inputNome.value === "") {
        alert("Preencha seu nome");
        return;
    }

    if (inputEmail.value === "") {
        alert("Preencha o campo de email");
        return;
    }

    if (inputTelefone.value === "") {
        alert("Preencha seu telefone para contato");
        return;
    }

console.log(dados)

})

function mostrarDados(){
    const valor1 = document.getElementById("nome")
    const valor2 = document.getElementById("email")
    const valor3 = document.getElementById("telefone")
    console.log("Nome: " + valor1.value, "Email:" + valor2.value, "Telefone: " + valor3.value)
    alert("Obrigado pelo Cadastro")
}
