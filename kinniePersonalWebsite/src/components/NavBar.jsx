import "../css/navbar.css"

function NavBar() {
    return (
        <>
          <nav>
            <a 
            className="logo nav-elm">Home</a>
            <a className="nav-elm" >Contact</a>
            <a className="nav-elm">Skills</a>
            <a className="nav-elm" >Work</a>
          </nav>
        </>
      )
}

export default NavBar