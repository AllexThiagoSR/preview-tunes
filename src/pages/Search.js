import React, { Component } from 'react';
import AlbumsList from '../components/AlbumsList';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';

class Search extends Component {
  state = {
    artistName: '',
    albums: [],
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { artistName, albums } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <SearchForm
          handleChange={ this.handleChange }
          artistName={ artistName }
        />
        <AlbumsList albums={ albums } />
      </div>
    );
  }
}

export default Search;
