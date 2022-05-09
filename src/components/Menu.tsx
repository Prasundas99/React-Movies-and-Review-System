import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link"  to="/genres">Genere</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/movies/filter">Filter Movies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/sctors">Actors</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/MovieTheators">Movie Theators</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/movie/create">Create Movie</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
