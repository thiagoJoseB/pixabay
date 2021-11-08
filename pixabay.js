'use strict'

const limparElementos = (elemento) =>{
    while(elemento.firstChild){
       elemento.removeChild(elemento.lastChild);
    }
 }
 





const inserirNomeImagem  = async (evento) =>{
    if(evento.key == "Enter" || evento.type == "click"){ 
    const imagems = document.getElementById('pesquisaImagensInput').value;
    const url = `https://pixabay.com/api/?key=24136613-919a2d4521b496eb21144bbaa&q=${imagems}&image_type=photo`;
    const dados = await fetch(url);
    const fotos = await dados.json(); 
   //console.log(fotos);
   
   limparElementos(document.querySelector('.galeria'))

   carregarImagens(fotos.hits);
    
 }
   
   
}

const uploadImagems = (item) => {
    const img = document.querySelector('.galeria');
    const div = document.createElement('div')
    div.classList.add('photo')
    div.innerHTML = `
    <div class="imgPhoto"> 
    <img src="${item.previewURL}">
    <div class="type">${item.tags}</div>
    <div class="type"><img src="img/like.png" class="confImg">${item.likes} likes </div>
    <div class="type"><img src="img/comment.png" class="confImg">${item.comments} comments </div>
    </div>
    `
img.appendChild(div);
}

const carregarImagens =(imagem) => imagem.forEach( uploadImagems) 



document.getElementById('pesquisaImagensInput').addEventListener('keypress' ,inserirNomeImagem);

document.getElementById('search').onclick = inserirNomeImagem

