import { Link } from 'react-router-dom';
import './Card.scss';
import Icon from '../icon/Icon';
import Button from '../button/Button';

/**
 * 
 * @param {name | pokeId | types | isFav | handleAddRemoveFavs} props 
 * @returns 
 */

function Card(props) {

  function goTop() {
    // Function to scroll to top of the detail page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

    return (
      <Link onClick={goTop} to={`/detail/${props.name}`} className='card' id={props.name}>
        <div className="card__img">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokeId}.png`} alt={`Pokemon ${props.name}`} />
        </div>
        <div className="card__contents">
          {/* Charge the pokemon name using the forst letter capitalized */}
          <h3 className='card__title'>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h3>
          <p>#{props.pokeId.toString().padStart(3, '0')}</p>
          <div className="tagList">
            {props.types.map(item => <span className='tag' key={item.type.name}>{item.type.name}</span>)}
          </div>
        </div>
        <Button extraClass='card__favourite' preventDefault={true} handleClick={() => props.handleAddRemoveFavs(props.name)} icon={props.isFav ? 'heartFill' : 'heartEmpty'} />
      </Link>
    )
  }
  
  export default Card