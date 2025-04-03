import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><NavLink to="/">Books</NavLink></li>
        <li><NavLink to="/quotes">Quotes</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation; 