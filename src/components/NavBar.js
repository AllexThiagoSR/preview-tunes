import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const { paths } = this.props;

    return (
      <nav>
        <ul>
          {
            paths.map(({ loc, path }) => {
              const location = loc.replace(loc[0], loc[0].toUpperCase());
              return (
                <li key={ loc }>
                  <Link to={ path } data-testid={ `link-to-${loc}` }>
                    { location }
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </nav>
    );
  }
}

NavBar.propTypes = {
  paths: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default NavBar;
