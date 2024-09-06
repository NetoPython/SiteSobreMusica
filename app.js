function pesquisar() {
  const section = document.getElementById("resultados-pesquisa");
  const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  if (!campoPesquisa) {
    section.innerHTML = '<p class="nao-encontrado">Por favor, insira um termo de pesquisa.</p>';
    return;
  }

  const resultados = dados.filter(dado => {
    const tituloLower = dado.titulo.toLowerCase();
    const descriçãoLower = dado.descrição.toLowerCase();
    const tagsLower = dado.tags.toLowerCase();
    const regex = new RegExp(campoPesquisa, "gi"); // Busca global e insensível a caixa
    return tituloLower.match(regex) || descriçãoLower.match(regex) || tagsLower.match(regex);
  });

  if (resultados.length === 0) {
    section.innerHTML = '<p class="nao-encontrado">Nenhum resultado encontrado.</p>';
  } else {
    let html = '';
    resultados.forEach(dado => {
      html += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.link}" target="_blank">${dado.titulo.replace(new RegExp(campoPesquisa, "gi"), match => `<strong>${match}</strong>`)}</a>
          </h2>
          <p>${dado.descrição}</p>
        </div>
      `;
    });
    section.innerHTML = html;
  }
}
