class trote{
    constructor(title, date, author, img, paragraph){
        this.title = title
        this.date = date
        this.author = author
        this.img = new image(100, 100)
        this.img.src = img
        this.paragraph = paragraph
    }
}

export const trotes = [
    new trote("dia da mulher", "08/03/2024", "William Lucas da Silva Ribeiro", "", "Troterealiao m homenagem ao dia das molieres")
]

