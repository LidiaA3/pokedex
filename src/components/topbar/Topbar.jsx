import { Link } from "react-router-dom"
import './Topbar.scss';
import { useContext } from "react";
import { LayoutContext, ThemeContext } from "../../views/layout/Layout";
import Button from "../button/Button";

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
          <Button isLink={true} justIcon={true} goTo='/favourites' icon='heartFill' />
          <Button justIcon={true} handleClick={handleTheme} icon='theme' />
          <Button justIcon={true} handleClick={handleLayout} icon='layout' />
        </nav>
      </div>
    )
  }
  
  export default Topbar