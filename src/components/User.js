import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  render() {
    const { name, image } = this.props;
    return (
      <div className="header-user">
        <div>
          <img alt={ `User: ${name}` } src={ image } />
        </div>
        <span data-testid="header-user-name">{ name }</span>
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default User;
