import React, { Component } from 'react';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import UserProfile from '../components/UserProfile';
import Loading from '../components/Loading';
import '../styles/Profile.css';

class Profile extends Component {
  state = {
    loading: true,
    loggedUser: {},
  };

  async componentDidMount() {
    const loggedUser = await getUser();
    this.setState({
      loggedUser,
      loading: false,
    });
  }

  render() {
    const { loading, loggedUser } = this.state;
    return (
      <div data-testid="page-profile" className="profile-page">
        <Header />
        <div className="profile-container">
          {
            loading ? <Loading /> : <UserProfile user={ loggedUser } />
          }
        </div>
      </div>
    );
  }
}

export default Profile;
