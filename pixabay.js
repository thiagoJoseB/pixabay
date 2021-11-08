'use strict'

// const  preencherImagens =  (fotos) =>{
//  document.querySelector('.galeria-container').src = fotos.hits ;
 
 
//  for( let i =0; i > hits.length; i++);

//  console.log(hits).previewURL;
 


// }








const inserirNomeImagem  = async (evento) =>{
    if(evento.key == "Enter"){ 
    const imagems = document.getElementById('pesquisaImagensInput').value;
    const url = `https://pixabay.com/api/?key=24136613-919a2d4521b496eb21144bbaa&q=${imagems}&image_type=photo`;
    const dados = await fetch(url);
    const fotos = await dados.json(); 
   //console.log(fotos);
   
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
    </div>
    `
img.appendChild(div);
}

const carregarImagens =(imagem) => imagem.forEach( uploadImagems) 



document.getElementById('pesquisaImagensInput').addEventListener('keypress' ,inserirNomeImagem);


