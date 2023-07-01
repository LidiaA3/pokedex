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

  function goToPrevSearch() {
    // Function to go to previous page
    setActualOffset(actualOffset - limitSearch)
    console.log(actualOffset);
  }

  function goToNextSearch() {
    // Function to go to next page
    setActualOffset(actualOffset + limitSearch)
    console.log(actualOffset);
  }

    return (
      <main className='main'>
        <section className="section-grid">
          { context.pokeList.length === 0
          ?
            // If the array is empty charge a Loading text
            <p>Loading ...</p>
          :
            // When the array is filled, mapping it to paint all pokemon cards
            context.pokeList.map(pokemon => <Card key={pokemon.name} name={pokemon.name} types={pokemon.types} pokeId={pokemon.id} />)
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