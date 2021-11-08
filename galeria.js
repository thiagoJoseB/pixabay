"use strict";

const imagens = [
    "./img/exercito.jpg",
    "./img/exercito-brasileiro.jpg",
    "./img/imagem.jpg",
    "./img/img1.jpg",
    "./img/img2.jpg",
    "./img/img3.jpg",
    "./img/img4.jpg",
    "./img/img5.jpg"

]



const limparElementos = (elemento) =>{
   while(elemento.firstChild){
      elemento.removeChild(elemento.lastChild);
   }
}



const pesquisarImagens = async (evento) =>{

   if(evento.key === 'Enter'){
      const raca = evento.target.value;
      const url = `https://dog.ceo/api/breed/${raca}/images`;
     const imagensResponse = await fetch (url);
      const imagens = await imagensResponse.json();

      limparElementos(document.querySelector(' .galeria-container'));
      limparElementos(document.querySelector(' .slide-container'));


      carregarGaleria(imagens.message);
      carregarSlide(imagens.message);
   }

   
  
};

const pegarId = (url) => {

const posBarra = url.lastIndexOf("/") + 1 
const posPonto = url.lastIndexOf(".")
return url.substring(posBarra, posPonto )

}

const criarItem = (urlImagem) => {
   const container = document.querySelector(".galeria-container")
   const novoLink = document.createElement("a")
   novoLink.href = `#${pegarId(urlImagem)}`
   novoLink.classList.add("galeria-items")
   novoLink.innerHTML =` <img src="${urlImagem}" alt=""> ` 
   container.appendChild(novoLink)
   
  /* container.innerHTML += `
  
   <a href="#exercito-brasileiro" class="galeria-items">
      <img src="${urlImagem}" alt="">

   </a>
   
   `*/

}

const carregarGaleria = (imgs) => imgs.forEach(criarItem)


const criarSlide =  (urlImagem , indice , arr) => {
    
   const container = document.querySelector(".slide-container")
   const novaDiv = document.createElement("div")
   novaDiv.classList.add("slide")
   novaDiv.id = pegarId(urlImagem)

   const indiceAnterior = indice <= 0 ? arr.length -1  : indice -1   /// exemplo:  indice 2 - 1 = 1 indice anterior 
   const idAnterior = pegarId(arr[indiceAnterior])


   const indiceProximo = indice >= arr.length -1  ? 0 : indice +1 /// exemplo:  indice 2 + 1 = 3  indice proximo 
   const idProximo = pegarId(arr[indiceProximo])


   novaDiv.innerHTML = `
   <div class="imagem-container">
       <a href="#"class="fechar" > &#128473;</a>
       <a href="#${idAnterior}" class="navegacao anterior" >&#171;</a>
       <img src="${urlImagem}" alt="">
       <a href="#${idProximo}" class="navegacao proximo">&#187;</a>
   </div>
   
   
   `

   container.appendChild(novaDiv)



}

const carregarSlide = (imgs) => imgs.forEach(criarSlide)

///carregarGaleria(imagens)
///carregarSlide(imagens)



document.querySelector('.pesquisa-container input').addEventListener('keypress', pesquisarImagens);