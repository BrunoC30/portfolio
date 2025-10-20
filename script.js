//variavies de sincronização com o github
const pfp = document.querySelector("#foto");
const nickName = document.querySelector("#username");

//controle de layer
const layer2 = document.querySelector("#layer2");

//variavel de card maximizador
const btaoExit = document.querySelector("#exit");
const cardImg = document.querySelector(".image")
const cardTitulo = document.querySelector(".textos h1");
const cardDescricao = document.querySelector(".textos p");
const linkbtao = document.querySelector("#linkBtao");

//lista de projetos
const projetos = document.querySelectorAll(".cardP");
const verMais = document.querySelector("#verMais");
let ativo = false;

//todos os projetos tem lógica de abrir card
projetos.forEach(card=>{
    card.addEventListener("click",()=>{
        //abrir card
        layer2.style.display="flex";
        cardImg.style.backgroundImage = window.getComputedStyle(card).backgroundImage;

        if(card.getAttribute("name")===""){
            cardTitulo.textContent="Sem título"
        }else{
            cardTitulo.textContent = card.getAttribute("name");
            linkbtao.href= card.dataset.link;
        }
        if(card.dataset.d===""){
            cardDescricao.textContent="em breve"
        }else{

            cardDescricao.textContent = card.dataset.d;
        }

    })
})
//aumentar e diminuir o tamanho no mobile
verMais.addEventListener("click",()=>{
    const containerProjetos = document.getElementById("containerProjetos");
    const cards = document.querySelector(".cards")

    if(ativo===false){
        ativo=true;
        containerProjetos.style.height="500px";
        cards.style.gridTemplateRows="2fr 2fr 2fr";
        verMais.textContent="ver menos";
    }else{
        ativo=false;
        containerProjetos.style.height="260px";
        cards.style.gridTemplateRows="100%";
        verMais.textContent="ver mais";
    }
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