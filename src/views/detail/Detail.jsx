import { useContext } from "react";
import { useParams } from "react-router-dom"
import { PokedexContext } from "../layout/Layout";

function Detail() {

  const pokeName = useParams().pokeName;

  const context = useContext(PokedexContext);
  const pokeList = context.pokeList;

  const thisPokemon = pokeList.find(item => item.name === pokeName);
  console.log(thisPokemon);


    return (
      <>
        <h1>Detail pokemon {pokeName}</h1>
      </>
    )
  }
  
  export default Detail