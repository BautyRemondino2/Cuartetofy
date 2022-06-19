let string = location.search;
let qString = new URLSearchParams (string);
let id = qString.get ("id")

let urlArt = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + id
let urlArt2 = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + id + "/albums"


fetch(urlArt)
.then(function(rtaAlbum){
     return rtaAlbum.json ();

})
.then(function(data){
     console.log(data);
    
     let cantante= document.querySelector (".fotoshop");
     let artista = document.querySelector (".nombre");

     cantante.src = data.picture;
     artista.innerHTML = data.name;


    

})

.catch(function(error){
     console.log(error);
})


fetch(urlArt2)
.then(function(respuestaAlbum){
    return respuestaAlbum.json ();

})
.then(function(data){
    console.log(data);

    let busqueda = data.data;
    let listaAlbumes = document.querySelector(".disc");
    let albums = "";

    for (let i=0; i<5; i++) {
       albums +=`
       <p class=""<a href="disco.html?id=${busqueda[i].id}"></a>>${busqueda[i].title}</p>
               `
    }
listaAlbumes.innerHTML += albums;



})
.catch(function(error){
    console.log(error);
})