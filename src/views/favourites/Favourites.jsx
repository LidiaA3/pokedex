import { useContext, useEffect, useState } from "react"
import { PokedexContext } from "../layout/Layout"
import Card from "../../components/card/Card";

function Favourites() {

  const context = useContext(PokedexContext);
  const pokeFavs = context.pokeFavs;
  const setPokeFavs = context.setPokeFavs;

  const [pokeFavsList, setPokeFavsList] = useState([]);

  const arr = [];

  useEffect(()=> {
    pokeFavs.map(item => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${item}`)
        .then(res => res.json())
        .then(data => {
          if(!arr.find(item => item.id == data.id)) {
            arr.push(data)
            arr.sort((a, b) => a.id - b.id)
          }
          return arr
        })
        .then(arrayInfo => setPokeFavsList([...arrayInfo]))
    })
  }, [pokeFavs])

  function addRemoveFavs(e, pokeName) {    
    // With preventDefault we prevent the link from acting while adding to favourites
    e.preventDefault();
    if(!pokeFavs.includes(pokeName)) {
        // If the pokemon it's not in the list we add it
        setPokeFavs([...pokeFavs, pokeName])
    } else {
        // If the pokemon is in the list we remove it
        const indexDeletePoke = pokeFavs.findIndex(item => item === pokeName);
        pokeFavs.splice(indexDeletePoke, 1);
        setPokeFavs([...pokeFavs]);
    }
  }

    return (
      <main className="main">
        <h1>Favourites pokemons</h1>
        <article className="section-display">
          {pokeFavsList.map(item => <Card key={item.name} name={item.name} pokeId={item.id} types={item.types} isFav={pokeFavs.includes(item.name)} handleAddRemoveFavs={(e) => addRemoveFavs(e, item.name)} />)}
        </article>
      </main>
    )
  }
  
  export default Favourites