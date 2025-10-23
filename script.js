//variavies de sincronização com o github
const pfp = document.querySelector("#foto");
const nickName = document.querySelector("#username");

//controle de layer
const layer2 = document.querySelector("#layer2");

//variavel de card maximizador
const cardViewer = document.querySelector("#cardViewer")
const cardExit = document.querySelector("#exit");
const cardImg = document.querySelector(".image")
const cardTitulo = document.querySelector("#cardTitle");
const cardDescricao = document.querySelector(".textos p");
const linkbtao = document.querySelector("#linkBtao");

//variaveis de card de skills
const icones = document.querySelector("#bgicones");
const cardSkill = document.querySelector("#cardSkills");
const exitSkill = document.querySelector("#exitSkill")

//lista de projetos
const projetos = document.querySelectorAll(".cardP");
const verMais = document.querySelector("#verMais");
let ativo = false;

//abrir card de skills
icones.addEventListener("click",()=>{
    gerenciarCard(cardSkill,"abrir");
})
exitSkill.addEventListener("click",()=>{
    gerenciarCard(cardSkill,"fechar");
})
//fechar card de skils

//todos os projetos tem lógica de abrir card
projetos.forEach(card=>{
    card.addEventListener("click",()=>{
        //abrir card
        abrirCards(card);

    })
})

//lógica de fechar card de projetos
cardExit.addEventListener("click",()=>{
    gerenciarCard(cardViewer,"fechar");
})


//aumentar e diminuir o tamanho no mobile
verMais.addEventListener("click",()=>{
    const containerProjetos = document.querySelector(".containerProjetos");
    const cards = document.querySelector(".cards")

    if(ativo===false){
        ativo=true;
        containerProjetos.classList.add("expandirContainerCards")
        cards.classList.add("expandirCards");
        verMais.textContent="ver menos";
    }else{
        ativo=false;
        containerProjetos.classList.remove("expandirContainerCards")
        cards.classList.remove("expandirCards")
        verMais.textContent="ver mais";
    }
})


fetch("https://api.github.com/users/BrunoC30").
then(res=> res.json()).
then(data=>{
    console.log(data);
    pfp.style.backgroundImage=`URL(${data.avatar_url})`;
}).
catch(err=>console.error(err));

//funções para deixar código clean

function abrirCards(cardEL){
    layer2.style.display="flex";
        cardViewer.style.display="flex";
        cardImg.style.backgroundImage = window.getComputedStyle(cardEL).backgroundImage;

        if(cardEL.getAttribute("name")===""){
            cardTitulo.textContent="Sem título"
        }else{
            cardTitulo.textContent = cardEL.getAttribute("name");
            linkbtao.href= cardEL.dataset.link;
        }
        if(cardEL.dataset.d===""){
            cardDescricao.textContent="em breve"
        }else{

            cardDescricao.textContent = cardEL.dataset.d;
        }
}
//abrir ou fechar card
function gerenciarCard(cardEl,action){
    if(action==="abrir"){
        layer2.style.display="flex";
        cardEl.style.display="flex";
    }else{
        layer2.style.display="none";
        cardEl.style.display="none";
    }
}