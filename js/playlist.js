if(sessionStorage.getItem("fav") != null) {

    let playList = document.querySelector(".playlist");
    let añadir = sessionStorage.getItem("fav").split(",")

    for (let i =0; i<añadir.length; i++) {
fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/track/${añadir[i]}`)
        .then(function(response) {
            return response.json();
        })   
        .then(function(data) {
            console.log(data)
            playList.innerHTML += `<article class="song">
            <a href="cancion.html?id=${data.id}"> <img class="pos" src="${data.album.cover}">
            <p class="">${data.title}</p></a>
            </article>`
            document.querySelector(".quitar").addEventListener("click", function(){
                let remove = sessionStorage.removeItem("fav")
                console.log(remove)
            })
        })
        .catch(function(error){
            console.log('FUNCIONAMEEEEE' + error);
        })
    }

} else {
    let nohay = `<section class="songen"><img class="imgnosignal" src="../img/no signal.jpg">
    <p class="nameplay">Parece que no hay canciones agregadas a tu playlist por el momento</p></a></section>`
    playList.innerHTML = nohay
}