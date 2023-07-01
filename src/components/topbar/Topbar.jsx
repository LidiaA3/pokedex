import { Link } from "react-router-dom"
import './Topbar.scss';
import { useContext } from "react";
import { LayoutContext, ThemeContext } from "../../views/layout/Layout";

function Topbar() {

  const theme = useContext(ThemeContext).theme;
  const setTheme = useContext(ThemeContext).setTheme;

  const layout = useContext(LayoutContext).layout;
  const setLayout = useContext(LayoutContext).setLayout;

  function handleTheme() {
    if(theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  function handleLayout() {
    if(layout === 'grid') {
      setLayout('list');
    } else {
      setLayout('grid');
    }
  }

    return (
      <div className="topbar">
        <Link to='/'><img src="/pokeapi_logo.png" alt="Logo pokeapi" className="topbar__logo" /></Link>

        <nav className="topbar__actions">
          <Link to='/favourites'>favs</Link>
          <button onClick={handleTheme}>theme</button>
          <button onClick={handleLayout}>layout</button>
        </nav>
      </div>
    )
  }
  
  export default Topbar