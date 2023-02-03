import React, { Component } from 'react';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';

class Search extends Component {
  state = {
    artistName: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { artistName } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <SearchForm
          handleChange={ this.handleChange }
          artistName={ artistName }
        />
      </div>
    );
  }
}

export default Search;
