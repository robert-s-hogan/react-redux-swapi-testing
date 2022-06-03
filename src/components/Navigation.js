import * as React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  let activeStyle = {
    background: '#d810ab',
    color: '#000',
    fontWeight: 'bold',
    border: '1px solid #000',
    borderRadius: '50%',
    padding: '.5rem 1rem',
    fontSize: '2rem ',
    fontSerif: `'Roboto', 'sans-serif'`,
  };

  let activeClassName = 'underline';
  return (
    <nav className="container max-w-4xl px-4 md:mx-auto my-4 flex items-center justify-between">
      <h1 className="text-center my-4 text-white">SWAPI</h1>
      <ul className="flex items-center justify-between space-x-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'letter-box bg-purple' : undefined
            }
          >
            People
          </NavLink>
        </li>
        <li>
          <NavLink
            to="planets"
            className={({ isActive }) =>
              isActive ? 'letter-box bg-orange' : undefined
            }
          >
            Planets
          </NavLink>
        </li>
        <li>
          <NavLink to="species">
            {({ isActive }) => (
              <span className={isActive ? 'letter-box bg-yellow' : undefined}>
                Species
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="films">
            {({ isActive }) => (
              <span className={isActive ? 'letter-box bg-green' : undefined}>
                Films
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="starships">
            {({ isActive }) => (
              <span className={isActive ? 'letter-box bg-blue' : undefined}>
                Starships
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="vehicles">
            {({ isActive }) => (
              <span className={isActive ? 'letter-box bg-red' : undefined}>
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
