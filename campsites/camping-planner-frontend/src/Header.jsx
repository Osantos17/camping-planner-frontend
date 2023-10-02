import "./Header.css";

export function Header() {
  return (
    <div className="content">
      <nav className="navbar navbar-expand-lg .bg-transparent">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="/"><h3 className="navtext">HOME</h3></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/nationalparks"><h3 className="navtext">PARK INDEX</h3></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#"><h3 className="navtext">MY PARKS</h3></a>
              </li>
            </ul>
            <div className="Signup">
              <a className="nav-link text-white" href="/signup"><h3 className="navtext">SIGN UP</h3></a>
            </div>
            <div className="Signup">
              <a className="nav-link text-white" href="/login"><h3 className="navtext">SIGN IN</h3></a>
            </div>
          </div>
        </div>
      </nav>
  </div>
  )
}