import { Link } from 'react-router-dom';
import './Card.scss';

function Card(props) {

    return (
      <Link to={`/detail/${props.name}`} className='card'>
        <p>{props.pokeId}.{props.name}</p>
        <p>{props.abilities.map(item => item.ability.name).join(', ')}</p>
      </Link>
    )
  }
  
  export default Card