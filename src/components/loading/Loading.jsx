import './Loading.scss';

function Loading() {
    return (
        <main className='loading'>
            <h2>Loading...</h2>
            <img className='loading__ball' src="/pokemon_icon.png" alt="loading-image" />
        </main>
    );
}

export default Loading