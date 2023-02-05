import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class UserProfile extends Component {
  render() {
    const { user: { name, email, description, image } } = this.props;
    return (
      <div>
        <img src={ image } alt="User Profile" data-testid="profile-image" />
        <span>{ name }</span>
        <span>{ email }</span>
        <p>{ description }</p>
        <Link to="/profile/edit">Editar perfil</Link>
      </div>
    );
  }
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default UserProfile;
