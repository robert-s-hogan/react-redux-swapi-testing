import { NavLink } from 'react-router-dom';
function Navigation() {
  return (
    <nav className="container w-full md:max-w-4xl md:mx-auto my-4">
      <h1 className="text-center my-4 text-white">SWAPI</h1>
      <ul className="flex items-center justify-between space-x-2 text-white text-sm md:text-lg">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'active-nav-link bg-purple' : ''
            }
          >
            People
          </NavLink>
        </li>
        <li>
          <NavLink
            to="planets"
            className={({ isActive }) =>
              isActive ? 'active-nav-link bg-orange' : ''
            }
          >
            Planets
          </NavLink>
        </li>
        <li>
          <NavLink to="species">
            {({ isActive }) => (
              <span className={isActive ? 'active-nav-link bg-yellow' : ''}>
                Species
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="films">
            {({ isActive }) => (
              <span className={isActive ? 'active-nav-link bg-green' : ''}>
                Films
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="starships">
            {({ isActive }) => (
              <span className={isActive ? 'active-nav-link bg-blue' : ''}>
                Starships
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="vehicles">
            {({ isActive }) => (
              <span className={isActive ? 'active-nav-link bg-red' : ''}>
                Vehicles
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
