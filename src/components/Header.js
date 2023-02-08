import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import NavBar from './NavBar';
import User from './User';
import pagesPath from '../helpers/pagesPath';
import '../styles/Header.css';

class Header extends Component {
  state = {
    loading: true,
    userName: '',
    image: '',
  };

  componentDidMount() {
    this.getUserLogged();
  }

  getUserLogged = async () => {
    const { name, image } = await getUser();
    this.setState({
      loading: false,
      userName: name,
      image,
    });
  };

  render() {
    const { loading, userName, image } = this.state;
    return (
      <header data-testid="header-component" className="header-container">
        <h1>TrybeTunes</h1>
        <NavBar
          paths={ pagesPath }
        />
        {
          (loading) ? <Loading /> : <User name={ userName } image={ image } />
        }
      </header>
    );
  }
}

export default Header;
