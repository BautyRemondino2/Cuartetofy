let stringdisc = location.search;
let qStringdisc = new URLSearchParams (stringdisc);
let id = qStringdisc.get ("id")

let urlDisc = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + id

fetch(urlDisc)
.then(function(respuestaDisc){
     return respuestaDisc.json ();

})
.then(function(data){
    console.log(data);

     let listaDiscos = document.querySelector(".discoJava");
     let discos = "";

    console.log(listaDiscos);
    console.log(search);

         discos +=`<article>
                 <h3>${data.title}</h2>
                 <img src="${data.cover}">
                 <h4>${data.data.name}</h4>
                 <p>${data.release_date}</p>
                 <p>${data.data.duration}</p>
                 <p>${data.data.type}</p>
                 <p>${data.nb_tracks}</p>
            </article>`


    console.log(albums);
         listaDiscos.innerHTML += discos;


})
.catch(function(error){
     console.log(error);
})

