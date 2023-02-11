import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class UserProfile extends Component {
  render() {
    const { user: { name, email, description, image } } = this.props;
    return (
      <div className="user-profile">
        <div className="user-img-container">
          <img src={ image } alt="User Profile" data-testid="profile-image" />
        </div>
        <Link to="/profile/edit">Editar perfil</Link>
        <div className="user-info-container">
          <div>
            <h3>Nome:</h3>
            <span>{ name }</span>
          </div>
          <div>
            <h3>Email:</h3>
            { ' ' }
            <span>{ email }</span>
          </div>
          <div>
            <h3>Descrição:</h3>
            <br />
            <p>{ description }</p>
          </div>
        </div>
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
