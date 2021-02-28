import { Link } from 'react-router-dom';
import '../nav.css';
const NavBarMenu = () => {
  return (
    <div>
      <nav>
        <div class="navbar">
          <Link to="/">
            <a>Home</a>
          </Link>
          <Link to="/MoviesList">
            <a>Top Rated Movies</a>
          </Link>
          <Link to="/MovieSearch">
            <a>Search</a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBarMenu;
