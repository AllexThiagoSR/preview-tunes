import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfileEditForm extends Component {
  render() {
    const {
      inputsInfos: { inputDescription, inputEmail, inputImage, inputName },
      handleChange,
      onClickFunc,
    } = this.props;
    const { inputsInfos } = this.props;

    const buttonDisabled = Object.values(inputsInfos).some((value) => value === '') || (inputEmail.match(/\S+@\S+\.\S+/) === null);

    return (
      <form className="edit-form">
        <label className="img-edit-label" htmlFor="edit-input-image">
          <div className="user-img-container-edit">
            <img src={ inputImage } alt="User Profile" data-testid="profile-image" />
          </div>
          <input
            data-testid="edit-input-image"
            id="edit-input-image"
            type="text"
            value={ inputImage }
            name="inputImage"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="edit-name-input">
          <h4>Nome:</h4>
          <input
            data-testid="edit-input-name"
            id="edit-name-input"
            type="text"
            value={ inputName }
            name="inputName"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="edit-input-email">
          <h4>Email:</h4>
          <input
            data-testid="edit-input-email"
            id="edit-input-email"
            type="email"
            value={ inputEmail }
            name="inputEmail"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="edit-input-description">
          <h4>Descrição:</h4>
          <textarea
            data-testid="edit-input-description"
            id="edit-input-description"
            value={ inputDescription }
            name="inputDescription"
            onChange={ handleChange }
            rows="6"
          />
        </label>
        <button
          type="button"
          data-testid="edit-button-save"
          disabled={ buttonDisabled }
          onClick={ onClickFunc }
          className="save-edit-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

ProfileEditForm.propTypes = {
  inputsInfos: PropTypes.shape({
    inputDescription: PropTypes.string,
    inputEmail: PropTypes.string,
    inputImage: PropTypes.string,
    inputName: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  onClickFunc: PropTypes.func.isRequired,
};

export default ProfileEditForm;
