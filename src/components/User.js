import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <span data-testid="header-user-name">{ name }</span>
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
