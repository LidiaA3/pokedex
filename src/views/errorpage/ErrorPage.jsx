import { Link } from "react-router-dom"

function ErrorPage() {

    return (
      <>
        <h1>Mmm looks like that pokemon is lost</h1>
        <p>try going back to the home page, it may appear soon</p>
        <Link to='/' className="btn">Go home</Link>
      </>
    )
  }
  
  export default ErrorPage