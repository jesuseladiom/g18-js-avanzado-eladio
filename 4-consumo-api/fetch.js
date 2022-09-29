const fetch= require('cross-fetch');
const url= 'https://rickandmortyapi.com/api/character/1'

fetch(url)
    .then((response)=> {
        return response.json();
    }).then((resp)=> {
        console.log(resp);
    })