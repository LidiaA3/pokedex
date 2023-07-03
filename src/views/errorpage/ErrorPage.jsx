import './ErrorPage.scss'
import { Link } from "react-router-dom"

function ErrorPage() {

  function getStorageTheme() {
    // getting theme stored item
    const temp = JSON.parse(localStorage.getItem('pokedexLocalContext'));
    return temp.theme;
  }

  const theme = getStorageTheme();

    return (
      <main className={`error ${theme}`}>
        <div>
          <h1 className='error__title'>Mmm looks like that pokemon is lost</h1>
          <p className='error__text'>try going back to the home page, it may appear soon</p>
        </div>
        <figure className="error__img">
          <img src="/pokemon_icon.png" alt="Icon pokemon ball" />
        </figure>
        <Link to='/'>Go home</Link>
      </main>
    )
  }
  
  export default ErrorPage