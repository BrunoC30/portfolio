//variavies de sincronização com o github
const pfp = document.querySelector("#foto");
const nickName = document.querySelector("#username");

//controle de layer
const layer2 = document.querySelector("#layer2");

//variavel de card maximizador
const btaoExit = document.querySelector("#exit");
const cardImg = document.querySelector(".image")
const cardTitulo = document.querySelector(".textos h1");
const descricao = document.querySelector("metaDados");

//lista de projetos
const projetos = document.querySelectorAll(".cardP");

//todos os projetos tem lógica de card
projetos.forEach(card=>{
    card.addEventListener("click",()=>{
        //abrir card
        layer2.style.display="flex";
        cardImg.style.backgroundImage = window.getComputedStyle(card).backgroundImage;
        cardTitulo.textContent= card.getAttribute("name");

    })
})

//lógica de fechar card
btaoExit.addEventListener("click",()=>{
    layer2.style.display="none";
})

fetch("https://api.github.com/users/BrunoC30").
then(res=> res.json()).
then(data=>{
    console.log(data);
    pfp.style.backgroundImage=`URL(${data.avatar_url})`;
}).
catch(err=>console.error(err));