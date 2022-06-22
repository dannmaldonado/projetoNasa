const API_KEY = 'QGfErbPzBUImjgfocC5c0WPaaqOnuSnM3JW0iuvl';
const BASE_URL = 'https://api.nasa.gov/planetary/apod';

//requisições do tipo GET = recebem os parâmetros na URL (endereço da requisição)

const btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {
    e.preventDefault();
    const name = document.querySelector("#inputData1");
    let value = name.value;

    console.log(value);

    fetch(BASE_URL + '?date=' + value + '&api_key=' + API_KEY)
    .then(resposta => resposta.json())
    .then(obj => {
        console.log(obj);
        document.querySelector("#imgNasa").src = obj.url;
        document.querySelector("#desc").innerHTML = obj.explanation;
        document.querySelector("#titulo").innerHTML = obj.title
    })
})

    


// let data = '2022-06-13';

// fetch(BASE_URL + '?date=' + data + '&api_key=' + API_KEY)
// .then(resposta => resposta.json())
// .then(obj => {
//   console.log(obj);
//   document.querySelector("#imgNasa").src = obj.url;
//   document.querySelector("#desc").innerHTML = obj.explanation;
//   document.querySelector("#titulo").innerHTML = obj.title
// })

