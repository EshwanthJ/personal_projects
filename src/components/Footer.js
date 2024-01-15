function Footer(){
    return(
        <footer className="py-3 bg-dark">
      <div className="container">
        <p className="float-end mb-1">
          <a className="btn btn-outline-secondary" href="#">Back to top</a>
        </p>
        <ul className="nav shortcuts">
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
    </footer>
    )
}

export default Footer;