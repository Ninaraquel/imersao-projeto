function removerAcentos(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    let mensagemDeErro = document.getElementById("mensagem-erro")

     // Limpa mensagens anteriores
     mensagemDeErro.innerHTML = "";

    if(campoPesquisa.length > 0 && campoPesquisa.length < 3){
      mensagemDeErro.innerHTML = "<p class='mensagem-erro'>Digite pelo menos 3 caracteres para pesquisar.</p>"
      section.innerHTML = ""; // Limpa os resultados anteriores
      return;
    }

    if(!campoPesquisa){
      mensagemDeErro.innerHTML = "<p class='mensagem-erro'>Nenhum resultado encontrado. Você precisa digitar algo no campo.</p>"
      section.innerHTML = ""; // Limpa os resultados anteriores
      return;
    }

    // Remove acentos e transforma tudo para minúsculas
    campoPesquisa = removerAcentos(campoPesquisa.toLowerCase());
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
  
    // Itera sobre cada animal na lista de animais
    for (let animal of animais) {
      titulo = removerAcentos(animal.titulo.toLowerCase());
      descricao = removerAcentos(animal.descricao.toLowerCase());

      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){

      // Cria um novo elemento div para cada animal
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${animal.youtube}" target="_blank">${animal.titulo}</a>
          </h2>
          <p class="descricao-meta">${animal.descricao}</p>
          <a href="${animal.link}" target="_blank">Mais informações</a>
        </div>
      `;
      }
      
    }

    if(!resultados){
      resultados ="<p class='mensagem-erro'>Nenhum resultado encontrado.</p>"
      section.innerHTML = ""; // Limpa os resultados anteriores
    }


  
    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados;
  }


