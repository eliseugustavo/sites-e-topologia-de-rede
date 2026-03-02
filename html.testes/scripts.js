/* 
[x]botao
[x]quando o botao é clicado
[x]textarea
[x]pegar o valor do textarea
[x]enviar para a IA
[x]peagr reposta da IA e colocar na tela
[]estilizar a resposta da IA


1°palavra chave:
2°palavra chave: redbull
3°palavra chave: devclub 
4°palavra chave:

*/
let botao = document.querySelector(".botao-gerar")
let chave = "SUA CHAVE AQUI"
let endereco = "https://api.groq.com/openai/v1/chat/completions"


async function gerarCodigo() {
    let textoUsuario = document.querySelector(".caixa-texto").value
    let blocoCodigo = document.querySelector(".bloco-codigo")
    let resultadoCodigo = document.querySelector(".resultado-codigo")

    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + chave
        },

        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content: "Você é um gerador de código html e css. responda somente com o código puro. NUNCA use crases, markdown ou explicações. Formato: primeiro <style> com css, depois o html. Siga EXATAMENTE oque o usuário pediu. Se pedir algo quicando, use translateY no @keyframes. Sepedir algo girando use rotate. "

                },

                {
                    role: "user",
                    content: textoUsuario
                }


            ]

        })
    })

    let dados = await resposta.json()
    let resultado = dados.choices[0].message.content

    blocoCodigo.textContent = resultado
    resultadoCodigo.srcdoc = resultado
    
    

}

botao.addEventListener("click", gerarCodigo)
