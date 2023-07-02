import { useContext, useEffect, useState } from "react"
import { PokedexContext } from "../layout/Layout"
import Card from "../../components/card/Card";

function Favourites() {

  const context = useContext(PokedexContext);
  const pokeFavs = context.pokeFavs;

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

    return (
      <main className="main">
        <h1>Favourites pokemons</h1>
        <article className="section-display">
          {pokeFavsList.map(item => <Card key={item.name} name={item.name} pokeId={item.id} types={item.types} />)}
        </article>
      </main>
    )
  }
  
  export default Favourites