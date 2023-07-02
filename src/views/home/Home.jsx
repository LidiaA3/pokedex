import './Home.scss'
import { useContext } from "react"
import { PokedexContext } from "../layout/Layout"
import Card from "../../components/card/Card";


function Home() {

  // Import the context and save all variables needed
  const context = useContext(PokedexContext);

  const limitSearch = context.limitSearch;
  const actualOffset = context.actualOffset;
  const limitPage = context.limitPage;
  const setActualOffset = context.setActualOffset;

  const pokeFavs = context.pokeFavs;
  const setPokeFavs = context.setPokeFavs;

  function goToPrevSearch() {
    // Function to go to previous page
    setActualOffset(actualOffset - limitSearch)
  }

  function goToNextSearch() {
    // Function to go to next page
    setActualOffset(actualOffset + limitSearch)
  }

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

  console.log(pokeFavs)

    return (
      <main className='main'>
        <section className="section-display">
          { context.pokeList.length === 0
          ?
            // If the array is empty charge a Loading text
            <p>Loading ...</p>
          :
            // When the array is filled, mapping it to paint all pokemon cards
            context.pokeList.map(pokemon => <Card isFav={pokeFavs.includes(pokemon.name)} key={pokemon.name} name={pokemon.name} types={pokemon.types} pokeId={pokemon.id} handleAddRemoveFavs={(e) => addRemoveFavs(e, pokemon.name)} />)
          }
        </section>
        <div className="pagination">
          {/* Pagination zone with two buttons and the actual page */}
          <button onClick={goToPrevSearch} disabled={actualOffset == 0}>Prev</button>
          <span>{actualOffset / limitSearch + 1}</span>
          <button onClick={goToNextSearch} disabled={actualOffset == limitPage*limitSearch - limitSearch}>Next</button>
        </div>
      </main>
    )
  }
  
  export default Home