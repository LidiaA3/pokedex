import './Detail.scss';
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { PokedexContext } from "../layout/Layout";
import Icon from '../../components/icon/Icon';

function Detail() {

  const pokeName = useParams().pokeName;

  const context = useContext(PokedexContext);

  const pokeFavs = context.pokeFavs;
  const setPokeFavs = context.setPokeFavs;

  const [thisPokemon, setThisPokemon] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(res => res.json())
      .then(data => setThisPokemon(data))
  }, [pokeName])

  console.log(thisPokemon)

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

  if (thisPokemon.length === 0) {
    return <p>Loading...</p>
  }


    return (
      <main className="detail">
        <Link to={`/#${pokeName}`} className='detail__goBack'><Icon iconID='arrowBack'/></Link>
        <header className="detail__header">
          <div className="detail__title">
            <h1 className='h2 detail__title__text'>{thisPokemon.name.charAt(0).toUpperCase() + thisPokemon.name.slice(1)}</h1>
            <button onClick={(e) => addRemoveFavs(e, thisPokemon.name)} className='detail__favourite'>{pokeFavs.includes(thisPokemon.name) ? <Icon iconID='heartFill'/> : <Icon iconID='heartEmpty'/>}</button>
          </div>
          <p>#{thisPokemon.id.toString().padStart(3, '0')}</p>
          <div className="tagList">
            {thisPokemon.types.map(item => <span className='tag' key={item.type.name}>{item.type.name}</span>)}
          </div>
        </header>
        <article className="detail__contents">
          <section className="detail__img">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${thisPokemon.id}.png`} alt={`Pokemon ${thisPokemon.name}`} />
          </section>
          <section className='detail__info'>
            <p className='detail__table'>Base experience <span>{thisPokemon.base_experience} pts</span></p>
            <p className='detail__table'>Height <span>{thisPokemon.height / 10} cm</span></p>
            <p className='detail__table'>Weight <span>{thisPokemon.weight / 10} kg</span></p>
          </section>
          <section className='detail__info'>
            <small>Abilities</small>
            <p>{thisPokemon.abilities.map(item => item.ability.name).join(', ')}</p>
          </section>
          <section className="detail__grid">
            {thisPokemon.stats.map(item => {
              return <div className="detail__card" key={item.stat.name}>
                <small>{item.stat.name}</small>
                <p>{item.base_stat}</p>
              </div>
            })}
          </section>
        </article>
      </main>
    )
  }
  
  export default Detail