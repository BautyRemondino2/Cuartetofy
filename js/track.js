let StringTracks = location.search;          // almacena la querystring de la url
let qStringTracks = new URLSearchParams(StringTracks);      // nos ayuda a trabajr con los parametros
let id = qStringTracks.get('id')       // permite obtener los valores dentro del queryString

let UrlTrack = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`

fetch(UrlTrack)
.then(function(res){
     return res.json();
})

.then(function(data){
     console.log(data);

     let track = document.querySelector('.cancion')

     track.innerHTML += `<iframe title="deezer-widget" class="ifram" src="https://widget.deezer.com/widget/dark/track/${data.id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
                         <h3>Artista de la cancion es: ${data.artist.name}</h3>
                         <h3>Esta cancion pertenece al album: ${data.album.title}</h3>
                         <div class='vermas2'>
                         <a class="trackPlay" href="playlist.html?id=${data}">Agregar a PlayList</a>
                         </div>`

})
.catch(function(error){
     console.log('El error fue: ' + error);
})