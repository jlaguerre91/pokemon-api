async function getPokemon(){


    //initialize url
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=100'


    //make an API call and get a response back.
    const response = await fetch(url);

    //Parse it into JSON format
    const pokemon = await response.json();


    //Create an array of Pokemon
    const pokeArray = pokemon.results;

    //access div element
    let mainDiv = document.getElementById("pokemon-names");

    

    //create linebreak
    let linebreak = document.createElement("br");

    //initialize text variable
    let text;

    for(let i=0; i<pokeArray.length; i++){

        let pTag = document.createElement("p"); //create new p element
        text = document.createTextNode((i+1) + " " + pokeArray[i].name + "\n"); //access pokemon name
        pTag.appendChild(text); //append pokemon name to ptag
        mainDiv.appendChild(pTag);//append ptag to div
        
        
    }

  

    
}

getPokemon();