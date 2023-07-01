import { Link } from "react-router-dom"
import './Topbar.scss';

function Topbar() {

    return (
      <div className="topbar">
        <img src="/pokeapi_logo.png" alt="Logo pokeapi" className="topbar__logo" />

        <nav className="topbar__actions">
          <Link to='/favourites'>favs</Link>
          <button>theme</button>
          <button>layout</button>
        </nav>
      </div>
    )
  }
  
  export default Topbar