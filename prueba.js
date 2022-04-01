const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImagen(pokeImg);
    })
}
//fetchPokemon();

const pokeImagen = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

/*pokeImagen("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png");*/

/*const imprimir = () =>{
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    console.log("Hola " + pokeInput)
}*/

const fetchPokemons = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        let Pokenombre = data.name;
        console.log(Pokenombre);
        Pokenom(Pokenombre);
    })
}
//fetchPokemon();

const Pokenom = (value) => {
    const Pokenombre = document.getElementById("Pokenombre");
    Pokenombre.innerHTML = value;
    
}

const fetchTipo = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        let PokeTipo = data.types[0].type.name;
        console.log(PokeTipo);
        Poket(PokeTipo);
    })
}
//fetchPokemon();

const Poket = (url) => {
    const PokeTipo = document.getElementById("PokeTipo");
    PokeTipo.innerHTML = url;
    
}
