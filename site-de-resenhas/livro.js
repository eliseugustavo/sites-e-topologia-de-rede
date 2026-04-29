class Livro {
    constructor(titulo, autor, anoPublicado, nomeLivro, resenha) {
        this._titulo = titulo;
        this._autor = autor;
        this._anoPublicado = anoPublicado;
        this._nomeLivro = nomeLivro;
        this._resenha = resenha;
    }

    // Métodos que seu código Java original chamava
    getTitulo() { return this._titulo; }
    getAutor() { return this._autor; }
    getAnoPublicado() { return this._anoPublicado; }
    getNomeLivro() { return this._nomeLivro; }
    getResenha() { return this._resenha; }
}