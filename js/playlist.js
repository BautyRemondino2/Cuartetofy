let definir = document.querySelector('.playlist')



fetch()
.then(function(ans){
 return ans.json
})






.then(function(data){

let track = document.querySelector('.playlist')
     track.innerHTML += `<iframe title="deezer-widget" class="ifram" src="https://widget.deezer.com/widget/dark/track/${data.id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
                         <h3>Artista de la cancion es: ${data.artist.name}</h3>
                         <h3>Esta cancion pertenece al album: ${data.album.title}</h3>
                         <div class='vermas2'>
                         <a class="trackPlay" href="playlist.html?id=${data}">Quitar de Playlist</a>
                         </div>`


})
.catch(function(error){
     console.log('El error fue: ' + error);
})