// 1. Coloca a lista "search-results" numa variável com o nome "resultsList" usando document.querySelector()

// 2. Coloca cada um dos itens resultados na variável "resultItems" usando document.querySelectorAll()
var resultsList = document.querySelector("#search-results")
console.log(resultsList);


// Seleciona a lista em "search-results" e coloca-a numa variável com o nome "resultsList", usando o "document.querySelector()". Cria um novo item na lista com as seguintes informações:
// - Title: Children of Dune
// - Format: Television
// - Year: 2003
// Depois de criares o item, adiciona-o ao fim da lista "resultsList" (append).
//var child = '<li class="result book">
//          <p class="title">Children of Dune <span 
//         class="format">Televison</span></p>'
//      <p class="year">2003</p>
//         <ul class="actions">
//              <li><a href="#save">Save</a></li>
//              <li><a href="#share">Share</a></li>
//              <li><a href="#report">Report</a></li>
//          </ul>
//      </li>"
var lireport = document.createElement("li")
lireport.innerHTML = '<a href="#report">Report</a>'
var lisave = document.createElement("li")
lisave.innerHTML = '<a href="#save">Save</a>'
var lishare = document.createElement("li")
lishare.innerHTML = '<a href="#share">Share</a>'
var ulnode = document.createElement("ul")
ulnode.appendChild(lisave)
ulnode.appendChild(lishare)
ulnode.appendChild(lireport)
var pano = document.createElement("p")
pano.setAttribute("class","year")
pano.innerText = "2003"
var ptitle = document.createElement("p")
ptitle.setAttribute("class","title")
ptitle.innerHTML = 'Children of Dune <span class="format">Televison</span>'
var liresult = document.createElement("li")
liresult.setAttribute("class","result book")
liresult.appendChild(ptitle)
liresult.appendChild(pano)
liresult.appendChild(ulnode)
resultsList.appendChild(liresult)