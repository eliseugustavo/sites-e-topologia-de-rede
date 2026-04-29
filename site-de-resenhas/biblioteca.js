const livrosIniciais = [
    new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, ""),
    new Livro("Harry Potter", "J.K. Rowling", 1997, ""),
    new Livro("O Código Da Vinci", "Dan Brown", 2003, "")
];


function salvarNovoLivro() {
    const t = document.getElementById('titulo').value;
    const a = document.getElementById('autor').value;
    const ano = document.getElementById('ano').value;
    const n = document.getElementById('nomeLivro').value;
    const r = document.getElementById('resenha').value;

    if (t && a && ano && n && r) {

        let dadosSalvos = JSON.parse(localStorage.getItem('minhaEstante')) || [];

        const novo = {
            _titulo: t,
            _autor: a,
            _anoPublicado: parseInt(ano),
            _nomeLivro: n,
            _resenha: r
        };

        dadosSalvos.push(novo);
        localStorage.setItem('minhaEstante', JSON.stringify(dadosSalvos));

        alert("Livro salvo com sucesso!");
        window.location.href = "index.html";
    } else {
        alert("Preencha todos os campos!");
    }
}


function listarLivros() {
    const output = document.getElementById('output');

    let dadosDoUsuario = JSON.parse(localStorage.getItem('minhaEstante')) || [];
    let listaCompleta = [...livrosIniciais];


    dadosDoUsuario.forEach(item => {
        listaCompleta.push(new Livro(item._titulo, item._autor, item._anoPublicado, item._nomeLivro, item._resenha));
    });

    let texto = "__________ LISTA DE LIVROS __________\n";

    listaCompleta.forEach((livro, i) => {
        texto += `Livro #${i + 1}\n`;
        texto += `Título: ${livro.getTitulo()}\n`;
        texto += `Autor: ${livro.getAutor()}\n`;
        texto += `Ano: ${livro.getAnoPublicado()}\n`;
        texto += `Disponível: ${livro.getNomeLivro()}\n`;
        texto += `Resenha: ${livro.getResenha()}\n`;
        texto += `------------------------------------\n`;
    });

    output.innerText = texto;
}

function sair() {
    document.getElementById('output').innerText = "Obrigado por usar a biblioteca!";
}

function realizarBusca() {
    
    const campoTermo = document.getElementById('termoBusca');
    const campoFiltro = document.getElementById('tipoFiltro');
    const campoResultado = document.getElementById('resultado');

    if (!campoTermo || !campoResultado) {
        console.error("Erro: Elementos do HTML não encontrados.");
        return;
    }

    const termo = campoTermo.value.toLowerCase().trim();
    const filtro = campoFiltro.value;


    const livrosIniciais = [
        new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, ""),
        new Livro("Harry Potter", "J.K. Rowling", 1997, ""),
        new Livro("O Código Da Vinci", "Dan Brown", 2003, "")
    ];

    let dadosUsuario = JSON.parse(localStorage.getItem('minhaEstante')) || [];
    let estanteCompleta = [...livrosIniciais];

    dadosUsuario.forEach(item => {

        estanteCompleta.push(new Livro(item._titulo, item._autor, item._anoPublicado, item._nomeLivro, item._resenha));
    });


    const resultados = estanteCompleta.filter(livro => {
        if (termo === "") return true; // Se vazio, mostra tudo

        if (filtro === "autor") {
            return livro.getAutor().toLowerCase().includes(termo);
        } else if (filtro === "ano") {
            return livro.getAnoPublicado().toString().includes(termo);
        } else if (filtro === "titulo") {
            return livro.getTitulo().toLowerCase().includes(termo);
        }
        return false;
    });


    if (resultados.length === 0) {
        campoResultado.innerText = "Nenhum livro encontrado para: " + termo;
    } else {
        let texto = `Resultados encontrados: ${resultados.length}\n`;
        texto += `====================================\n`;

        resultados.forEach((livro) => {
            texto += `Título: ${livro.getTitulo()}\n`;
            texto += `Autor: ${livro.getAutor()}\n`;
            texto += `Ano: ${livro.getAnoPublicado()}\n`;
            texto += `Nome do livro: ${livro.getNomeLivro()}\n`;
            texto += `------------------------------------\n`;
        });

        campoResultado.innerText = texto;
    }
}