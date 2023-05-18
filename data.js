var numeroSorteado = document.querySelector("div.box h1")
const botaoSortear = document.querySelector("div.box button")

var sorteo = []

function Sorteo(){
  numeroSorteado.innerHTML = `
 ${sorteo[Math.floor(Math.random() * sorteo.length)]}`
}

for(i = 1; i <= 502; i++){
    sorteo.push(i)
}

botaoSortear.addEventListener("click", () => {
  let divLoader = document.getElementById("loader")
    divLoader.innerHTML = `<div class="cargador">
                            <h1 class="h1_cargador"> El Nº ganador es:  </h1>
                            <div class="cargador2">                                
                            <span class="loader"></span>                            
                                                           
                            </div>
                          </div>`
    setTimeout(()=>{
        divLoader.remove()
        Sorteo(sorteo)

    },3000)
    

})

