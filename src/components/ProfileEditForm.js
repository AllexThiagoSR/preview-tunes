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
      <form>
        <input
          data-testid="edit-input-name"
          type="text"
          value={ inputName }
          name="inputName"
          onChange={ handleChange }
        />
        <input
          data-testid="edit-input-email"
          type="email"
          value={ inputEmail }
          name="inputEmail"
          onChange={ handleChange }
        />
        <textarea
          data-testid="edit-input-description"
          value={ inputDescription }
          name="inputDescription"
          onChange={ handleChange }
        />
        <input
          data-testid="edit-input-image"
          type="text"
          value={ inputImage }
          name="inputImage"
          onChange={ handleChange }
        />
        <button
          type="button"
          data-testid="edit-button-save"
          disabled={ buttonDisabled }
          onClick={ onClickFunc }
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
