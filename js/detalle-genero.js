let String = location.search;    
let qString = new URLSearchParams(String);
let idDet = qString.get('id')

let urldetail = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${idDet}`

fetch(urldetail)
.then(function(ans){
    return  ans.json();
})

.then(function(detail){
    console.log(detail.data);

    let detalles = document.querySelector('.generodetail');
    console.log(detalles);

                  detalles.innerHTML =`<article class="mona">
                  <img class="cuartetito" src="${detail.picture}">
                  <p class="descrip">${detail.name}</p>
                  </atricle>`
                  
  

})
.catch(function(error){
    console.log(error);
})