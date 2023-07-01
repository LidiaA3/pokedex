import { Link } from 'react-router-dom';
import './Card.scss';
import Icon from '../icon/Icon';

function Card(props) {

    return (
      <Link to={`/detail/${props.name}`} className='card'>
        <div className="card__img">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokeId}.png`} alt="" />
        </div>
        <div className="card__contents">
          {/* Charge the pokemon name using the forst letter capitalized */}
          <h3 className='card__title'>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h3>
          <p>#{props.pokeId.toString().padStart(3, '0')}</p>
          <div className="card__tagList">
            {props.abilities.map(item => <span className='card__tag' key={item.ability.name}>{item.ability.name}</span>)}
          </div>
          <span className='card__favourite'><Icon iconID='heartEmpty'/></span>
        </div>
      </Link>
    )
  }
  
  export default Card