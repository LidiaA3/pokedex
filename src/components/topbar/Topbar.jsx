import { Link } from "react-router-dom"
import './Topbar.scss';

function Topbar() {

    return (
      <div className="topbar">
        <img src="/pokeapi_logo.png" alt="Logo pokeapi" className="topbar__logo" />

        <nav className="topbar__nav">
          <Link to='/favourites'>favourites</Link>
          <button>theme</button>
          <button>layout</button>
        </nav>
      </div>
    )
  }
  
  export default Topbar