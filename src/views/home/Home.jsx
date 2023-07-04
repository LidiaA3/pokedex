import './Home.scss'
import { useContext } from "react"
import { PokedexContext } from "../layout/Layout"
import Card from "../../components/card/Card";
import Loading from '../../components/loading/Loading';
import Button from '../../components/button/Button';


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

  if(context.pokeList.length === 0) {
    return <Loading />
  }

    return (
      <main className='main'>
        <section className="section-display">
          {context.pokeList.map(pokemon => <Card isFav={pokeFavs.includes(pokemon.name)} key={pokemon.name} name={pokemon.name} types={pokemon.types} pokeId={pokemon.id} handleAddRemoveFavs={() => addRemoveFavs(pokemon.name)} />)}
        </section>
        <div className="pagination">
          {/* Pagination zone with two buttons and the actual page */}
          <Button goTop={true} handleClick={goToPrevSearch} isDisabled={actualOffset == 0} text='Prev' />
          <span>{actualOffset / limitSearch + 1}</span>
          <Button goTop={true} handleClick={goToNextSearch} isDisabled={actualOffset == limitPage*limitSearch - limitSearch} text='Next' />
        </div>
      </main>
    )
  }
  
  export default Home