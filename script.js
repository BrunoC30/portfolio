const pfp = document.querySelector("#foto");

fetch("https://api.github.com/users/BrunoC30").
then(res=> res.json()).
then(data=>{
    console.log(data);
    pfp.style.backgroundImage=`URL(${data.avatar_url})`;
}).
catch(err=>console.error(err));