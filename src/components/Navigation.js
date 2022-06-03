import { NavLink } from 'react-router-dom';
function Navigation() {
  return (
    <nav className="container max-w-4xl px-4 md:mx-auto my-4 flex items-center justify-between">
      <h1 className="text-center my-4 text-white">SWAPI</h1>
      <ul className="flex items-center justify-between space-x-4 text-white uppercase">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'letter-box bg-purple' : ''
            }
          >
            People
          </NavLink>
        </li>
        <li>
          <NavLink
            to="planets"
            className={({ isActive }) =>
              isActive ? 'letter-box bg-orange' : ''
            }
          >
            Planets
          </NavLink>
        </li>
        <li>
          <NavLink to="species">
            {({ isActive }) => (
              <span className={isActive ? 'letter-box bg-yellow' : ''}>
                Species
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="films">
            {({ isActive }) => (
              <span className={isActive ? 'letter-box bg-green' : ''}>
                Films
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="starships">
            {({ isActive }) => (
              <span className={isActive ? 'letter-box bg-blue' : ''}>
                Starships
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="vehicles">
            {({ isActive }) => (
              <span className={isActive ? 'letter-box bg-red' : ''}>
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
