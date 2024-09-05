function pesquisar() {


    let section = document.getElementById
    ("resultados-pesquisa")
    console.log(section);
    
    
    let resultados = ""
    
    
    for(let dado of dados) {
    
    
    resultados += `
    
    <div class="item-resultado">
      <h2>
        <a href="#" target="_blank">${dado.titulo}</a>
      </h2>
      <p class="descrição-meta">${dado.descrição}</p>
      <a href=${dado.link} target="_blank">Escute a música</a>
    </div>
    
    `
    }
    
    
    section.innerHTML = resultados


}


