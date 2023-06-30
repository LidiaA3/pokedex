import { useContext } from "react"
import { PokedexContext } from "../layout/Layout"
import Card from "../../components/card/Card";

function Home() {

  const context = useContext(PokedexContext);

  const limitSearch = context.limitSearch;
  const actualOffset = context.actualOffset;
  const setActualOffset = context.setActualOffset;

  function goToPrevSearch() {
    setActualOffset(actualOffset - limitSearch)
    console.log(actualOffset);
  }

  function goToNextSearch() {
    setActualOffset(actualOffset + limitSearch)
    console.log(actualOffset);
  }

    return (
      <>
        <h1>Home</h1>
        <section className="section-grid">
          { context.pokeList.length === 0
          ?
            <p>Loading ...</p>
          :
            context.pokeList.map(pokemon => <Card key={pokemon.name} name={pokemon.name} abilities={pokemon.abilities} pokeId={pokemon.id} />)
          }
        </section>
        <div className="navigation">
          <button onClick={goToPrevSearch} disabled={actualOffset == 0}>Prev</button>
          <button onClick={goToNextSearch}>Next</button>
        </div>
      </>
    )
  }
  
  export default Home