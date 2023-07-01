import { Link, Outlet } from "react-router-dom"
import Header from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"
import { createContext, useContext, useEffect, useState } from "react"

// Context API created
export const PokedexContext = createContext({
  pokeList: [],
  actualOffset: 0,
  setActualOffset: ()=>{},
  limitSearch: 20,
  limitPage: 0,
})

function Layout() {

  // Save context variables for use next
  const context = useContext(PokedexContext);

  const limitSearch = context.limitSearch;
  const [actualOffset, setActualOffset] = useState(context.actualOffset);

  const [limitPage, setLimitPage] = useState(context.limitPage);

  // State variable for save all pokemon list when fetch
  const [pokeList, setPokeList] = useState([]);

  // Provisional array to save the pokemon list
  const arr = [];

  useEffect(() => {
    // First fetch request using two variables to control the pagination
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${actualOffset}&limit=${limitSearch}`)
      .then(res => res.json())
      .then(data => {
        // Save the limit page to control the buttons disabled
        setLimitPage(Math.ceil(data.count / limitSearch))
        // For each pokemon do a fetch request to save more data about them
        data.results.map(item => {
          fetch(item.url)
            .then(res => res.json())
            .then(pokeInfo => {
              // If the pokemon is not in the array yet, then push it
              if(!arr.find(item => item.id == pokeInfo.id)) {
                arr.push(pokeInfo)
              }
              // Return the final array ordened by pokemon Id
              return arr.sort((a, b) => a - b);
            })
            // When the previous array were ready, set the array to state variable
            .then(arr => {
              setPokeList([...arr]);
            })
        })
      })
  }, [actualOffset, limitSearch])

    return (
      <>
      {/* Use the context by wrapping all components that are going to use it */}
      <PokedexContext.Provider value={{pokeList, actualOffset, setActualOffset, limitSearch, limitPage}}>
        <Header />
        <main className="main">
            <Outlet />
        </main>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/detail/b'>Detail</Link>
            <Link to='/favourites'>Favourites</Link>
            <Link to='/blabla'>Error</Link>
        </div>
        <Footer />
      </PokedexContext.Provider>
      </>
    )
  }
  
  export default Layout