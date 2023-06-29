import { Link, Outlet } from "react-router-dom"
import Header from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"

function Layout() {

    return (
      <>
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
      </>
    )
  }
  
  export default Layout