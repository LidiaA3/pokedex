import { Link, Outlet } from "react-router-dom"
import Header from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"
import { createContext, useContext, useEffect, useState } from "react"

export const PokedexContext = createContext({
  pokeList: [],
  actualOffset: 0,
  setActualOffset: ()=>{},
  limitSearch: 20,
})

function Layout() {

  const context = useContext(PokedexContext);

  const limitSearch = context.limitSearch;
  const [actualOffset, setActualOffset] = useState(context.actualOffset);

  const [pokeList, setPokeList] = useState([]);

  const arr = [];

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${actualOffset}&limit=${limitSearch}`)
      .then(res => res.json())
      .then(data => {
        data.results.map(item => {
          fetch(item.url)
            .then(res => res.json())
            .then(pokeInfo => {
              if(!arr.find(item => item.id == pokeInfo.id)) {
                arr.push(pokeInfo)
              }
              if(arr.length === limitSearch) {
                setPokeList(arr.sort((a, b) => a - b))
              }
            })
        })
      })
  }, [actualOffset])

    return (
      <>
      <PokedexContext.Provider value={{pokeList, actualOffset, setActualOffset, limitSearch}}>
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