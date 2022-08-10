async function buscarPokemon() {
    const inputValue = document.getElementById("idPokemon").value;
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`); //async away
    const json = await data.json();
    console.log(data);

    if (data.status == 200) {
      document.getElementById("name").innerText = json.name;
      
      const inputValue = document.getElementById("idPokemon").value = "";
    }; 
}

function deleteAll() {
  document.getElementById("name").innerText = "";
}