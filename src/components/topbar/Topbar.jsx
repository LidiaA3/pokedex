import { Link } from "react-router-dom"
import './Topbar.scss';
import { useContext } from "react";
import { ThemeContext } from "../../views/layout/Layout";

function Topbar() {

  const theme = useContext(ThemeContext).theme;
  const setTheme = useContext(ThemeContext).setTheme;

  function handleTheme() {
    if(theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

    return (
      <div className="topbar">
        <img src="/pokeapi_logo.png" alt="Logo pokeapi" className="topbar__logo" />

        <nav className="topbar__actions">
          <Link to='/favourites'>favs</Link>
          <button onClick={handleTheme}>theme</button>
          <button>layout</button>
        </nav>
      </div>
    )
  }
  
  export default Topbar