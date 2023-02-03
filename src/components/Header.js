import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import NavBar from './NavBar';
import User from './User';
import pagesPath from '../helpers/pagesPath';

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
        <NavBar
          paths={ pagesPath }
        />
      </header>
    );
  }
}

export default Header;
