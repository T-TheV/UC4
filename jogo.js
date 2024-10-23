class Jogo {
    exibirDados(){
        console.log(`
            Informações do Jogo: \n
            Titulo: ${this.titulo},
            Gênero: ${this.genero},
            Ano de Lançamento: ${this.anoLancamento},
            Classificação Etária: ${this.classificacaoEtaria},
            Publisher: ${this.publisher},
`)

    }
    constructor(titulo, genero, anoLancamento, classificacaoEtaria, publisher) {
        this.titulo = titulo
        this.genero = genero
        this.anoLancamento = anoLancamento
        this.classificacaoEtaria = classificacaoEtaria
        this.publisher = publisher

    }
    getTitulo(){
        return this.titulo;
    }
    getGenero(){
        return this.genero
    }
    getAnoLancamento(){
        return this.anoLancamento
    }
    getClassificacaoEtaria(){
        return this.classificacaoEtaria
    }
    getPublisher(){
        return this.publisher
    }

    // setTitulo(){}
    // setGenero(){}
    // setAnoLancamento(){}
    // setClassificacaoEtaria(){}
    // setPublisher(){}
}
let jogo1 = new jogo("valorant","fps",2020,"+18","Riot");
let jogo2 = new jogo("CS:GO","fps",2020,"+18","Riot");
let jogo3 = new jogo("Rainbow Six Siege","fps",2020,"+18","Riot");

jogo1.exibirDados()
jogo1.exibirDados()
jogo1.exibirDados()