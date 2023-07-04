import { Link } from 'react-router-dom';
import './Error.scss'

function Error() {
    return (
        <main className='error'>
            <h2>Error loading</h2>
            <img className='error__ball' src="/pokemon_icon.png" alt="error-load-image" />
            <Link to='/'>Go home</Link>
        </main>
    );
}

export default Error