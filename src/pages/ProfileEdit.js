import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from '../components/Loading';
import ProfileEditForm from '../components/ProfileEditForm';
import { getUser, updateUser } from '../services/userAPI';
import '../styles/ProfileEdit.css';

class ProfileEdit extends Component {
  state = {
    loading: true,
    // loggedUser: {},
    inputName: '',
    inputEmail: '',
    inputDescription: '',
    inputImage: '',
  };

  async componentDidMount() {
    const loggedUser = await getUser();
    const { name, image, description, email } = loggedUser;
    this.setState({
      // loggedUser,
      loading: false,
      inputDescription: description,
      inputName: name,
      inputImage: image,
      inputEmail: email,
    });
  }

  onClickSaveButton = async () => {
    const {
      inputDescription: description,
      inputName: name,
      inputEmail: email,
      inputImage: image,
    } = this.state;
    const { history: { push } } = this.props;
    this.setState({
      loading: true,
    });
    await updateUser({
      image,
      name,
      description,
      email,
    });
    push('/profile');
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      loading,
      inputDescription,
      inputEmail,
      inputImage,
      inputName,
    } = this.state;

    return (
      <div data-testid="page-profile-edit" className="profile-edit-page">
        <Header />
        <div className="profile-edit-container">
          {
            loading ? <Loading /> : <ProfileEditForm
              inputsInfos={ { inputDescription, inputName, inputImage, inputEmail } }
              handleChange={ this.handleChange }
              onClickFunc={ this.onClickSaveButton }
            />
          }
        </div>
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default ProfileEdit;
