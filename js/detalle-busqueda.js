let UrlForm = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart`
let UrlForm2 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre`
let CapForm = ''





fetch(UrlForm)
.then(function(res){
    return res.json()
})

.then(function(data){
    console.log(data);
 

    for(let i=0; i<5; i++){
        //construimos un elemento de la lista

    }

    if(){
        
    }
    

})

.catch(function(error){
    console.log(error);
})


fetch(UrlForm2)
.then(function(res){
    return res.json()
})

.then(function(data){
    console.log(data);

    

})

.catch(function(error){
    console.log(error);
})