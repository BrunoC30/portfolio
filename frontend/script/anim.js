const atualizarTituloHeader = ()=>{
    const tituloHeader = document.querySelector("header h1");
    if(window.innerWidth<=600){
        tituloHeader.textContent = "BrunoC30.Port";
    }else{
        tituloHeader.textContent = "BrunoC30.Portfolio";
    }
}
atualizarTituloHeader();
window.addEventListener("resize",()=>{
atualizarTituloHeader();
});