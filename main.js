const apikey = "e6e95ac1"
const base_uri = "https://www.omdbapi.com/?apikey="

console.log("hi")

let inp = document.getElementById("movie_name");

let createForm = (data)=>{
    let x = document.getElementById("data")
    let y = document.getElementById("popup")

    if (x) x.remove()
    let content = document.createElement("div");
    content.id  = "data"
    content.innerHTML += `<img src=${data.Poster} onerror=alert("Failed to load Image")>`
    content.innerHTML += `<h4>Movie Name : ${data.Title}</h4><br>`+`<h4>Release Year : ${data.Year}</h4><br>`+ `<h4>Genre : ${data.Genre}</h4><br>`
    content.innerHTML += `<h4>Plot : ${data.Plot}</h4><br>`+`<h4>Actors : ${data.Actors}</h4><br>`
    y.appendChild(content)
}

document.addEventListener('submit',(e)=>{
    e.preventDefault()
    fetch(base_uri+apikey+'&t='+inp.value)
    .then(res=>res.json())
    .then(data=>createForm(data))
    .catch(err=>console.log(err))
})


