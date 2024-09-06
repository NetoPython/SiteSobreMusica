# Função de Pesquisa Simples

**Descrição:**
Essa função JavaScript realiza uma pesquisa simples em um conjunto de dados de músicas, permitindo que o usuário encontre músicas por título, descrição ou tags.

**Como funciona:**

1. **Captura a entrada do usuário:** Obtém o termo de pesquisa a partir de um campo de input.
2. **Normaliza os dados:** Converte todos os dados para minúsculas para facilitar a comparação.
3. **Realiza a pesquisa:** Itera sobre os dados e verifica se o termo de pesquisa está presente em algum dos campos (título, descrição, tags).
4. **Exibe os resultados:** Cria elementos HTML para exibir os resultados da pesquisa.

**Tecnologias utilizadas:**
* **JavaScript:** Linguagem de programação principal.
* **DOM:** Modelo de Objeto de Documento para manipular o conteúdo HTML.

**Como usar:**
1. **Incluir o script:** Adicione este script à sua página HTML.
2. **Chamar a função:** Associe um evento (por exemplo, ao clicar em um botão) à chamada da função `pesquisar()`.
3. **Configurar o HTML:** Certifique-se de ter os elementos HTML com os IDs corretos para o campo de pesquisa e a seção de resultados.

**Exemplo de HTML:**
```html
<input type="text" id="campo-pesquisa">
<button onclick="pesquisar()">Pesquisar</button>
<div id="resultados-pesquisa"></div>
