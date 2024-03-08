let troteSection = document.getElementById('trotes')



function start(){
    troteSection.innerHTML = creatContent()
}

function creatContent(trote){
    let troteContent = `
    <div>
        <h3 id = "${trote.title}"> ${trote.title} </h3>
        <div>
            <img src="${trote.img}" alt="${trote.alt}"> 
            <p>${trote.description}</p>     
        </div>
    </div>
    `
    return troteContent
}


start()