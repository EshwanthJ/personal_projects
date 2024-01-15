function Navbar(){
    return(
        <nav>
        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-1">
                <h4 className="text-white">About</h4>
                <p>
                  With a degree in engineering, a background in professional
                  chess, and a love for problem-solving, I found my way to the
                  software development world.
                </p>
              </div>
              <div className="col-sm-4 offset-md-1 py-1">
                <h4 className="text-white px-3">Contact</h4>
                <ul className="nav">
                  <li className="nav-item">
                    <a
                      href="https://www.linkedin.com/in/eshwanthj/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link text-white"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://ratings.fide.com/profile/5007330"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link text-white"
                    >
                      <i className="fa-solid fa-chess-knight"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="mailto:eshwanthj@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link text-white"
                    >
                      <i className="fa-solid fa-envelope"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://github.com/EshwanthJ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link text-white"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <strong>Eshwanth J</strong>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>  
    )
}

export default Navbar;