const nome = document.getElementById("nome");
const email = document.getElementById("email");
const idade = document.getElementById("idade");
const senha = document.getElementById("senha");
const btn = document.getElementById("btn");
const form = document.getElementById("form");



function validar() {
  let valido = true;

 //nome 
 //nome 
  if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome.value)) {
    erroNome.textContent = "Nome deve conter apenas letras e espaços";
    erroNome.className = "erro"; // Garante que a classe de erro (vermelha) seja aplicada
    valido = false;
  } else if (nome.value.length < 3){
    erroNome.textContent = "Nome muito curto";
    erroNome.className = "erro"; 
    valido = false;
  }
  else {
    erroNome.textContent = "✔";
    erroNome.className = "sucesso"; 
  }

// email 
// email 
if (!email.value.includes("@")) {
  erroEmail.textContent = "Email inválido";
  erroEmail.className = "erro"; 
  email.classList.add("erro-input");
  valido = false;
} else {
  erroEmail.textContent = "✔";
  erroEmail.className = "sucesso"; 
  email.classList.remove("erro-input");
  email.classList.add("sucesso-input");
}

// botão inteligente
  btn.disabled = !valido;
}


nome.addEventListener("input", validar);
email.addEventListener("input", validar);

//  Confirmação de envio
form.addEventListener("submit", (e) => {
  if (!confirm("Tem certeza que deseja enviar?")) {
    e.preventDefault();
  }
});


 //  Bloqueio de caracteres inválidos no nome
nome.addEventListener("input", () => {
  nome.value = nome.value.replace(/[^A-Za-zÀ-ÿ\s]/g, "");
});