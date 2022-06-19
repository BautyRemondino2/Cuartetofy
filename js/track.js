let string = location.search;
let qString = new URLSearchParams(string);
let id = qString.get('id')
let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/` + id

fetch(url)
.then(function(rta){
     return rta.json();

})
.then(function(data){
     console.log(data);
         let info = data.data;


         let busqueda = document.querySelector('.cancion');
         let contentTrack = '';

for(let i=0; i<5; i++){
     contentTrack += `<article>
                <img src='${info[i].album.cover_medium}'>
                <h2>${info[i].title}</h2>
                <h4>${info[i].name}</h4>
                <button type="submit"  class="favs"><i class="fa-solid fa-magnifying-glass"></i>añadir canción</button>
                <p>${info[i].release_date}</p>
                <iframe src="" ${info[i].id}></iframe>
                     </article>`
}
         busqueda.innerHTMl+=contentTrack

document.querySelector(".favs").addEventListener("click", function(){
    let added;
    if (sessionStorage.getItem("playlist") !=null){
         added = sessionStorage.getItem("playlist").split(",")
         added.push(id)
    }
    else {
         added = []
         added.push(id)
    }
     sessionStorage.setItem(".favs", added)
})






})







.catch(function(error){
    console.log(error);
})

//no funciona todavia!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!