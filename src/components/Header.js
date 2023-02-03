import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import User from './User';

class Header extends Component {
  state = {
    loading: true,
    userName: '',
  };

  componentDidMount() {
    this.getUserLogged();
  }

  getUserLogged = async () => {
    const { name } = await getUser();
    console.log(name);
    this.setState({
      loading: false,
      userName: name,
    });
  };

  render() {
    const { loading, userName } = this.state;
    return (
      <header data-testid="header-component">
        {
          (loading) ? <Loading /> : <User name={ userName } />
        }
      </header>
    );
  }
}

export default Header;
