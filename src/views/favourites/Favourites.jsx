import { useContext, useEffect, useState } from "react"
import { PokedexContext } from "../layout/Layout"
import Card from "../../components/card/Card";
import Loading from "../../components/loading/Loading";
import { Link } from "react-router-dom";
import Error from "../../components/error/Error";

function Favourites() {

  const context = useContext(PokedexContext);
  const pokeFavs = context.pokeFavs;
  const setPokeFavs = context.setPokeFavs;

  const [pokeFavsList, setPokeFavsList] = useState([]);

  const [errorFetch, setErrorFetch] = useState(false);

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
        .catch(err => {
          console.log(`Pokemon doesn't exist: ${err}`)
          setErrorFetch(true);
        })
    })
  }, [pokeFavs])

  function addRemoveFavs(pokeName) {    
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

  if (pokeFavs.length === 0) {
    return <main className="main">
      <p>You haven&apos;t add pokemons to favourites</p>
      <Link to='/'>Go home to add pokemon to favourites</Link>
    </main>
  }

  if(pokeFavsList.length === 0) {
    return <Loading />
  }

  if(errorFetch) {
    return <Error />
  }

    return (
      <main className="main">
        <h1>Favourite pokemons</h1>
        <article className="section-display">
          {pokeFavsList.map(item => <Card key={item.name} name={item.name} pokeId={item.id} types={item.types} isFav={pokeFavs.includes(item.name)} handleAddRemoveFavs={() => addRemoveFavs(item.name)} />)}
        </article>
      </main>
    )
  }
  
  export default Favourites