import React, { Component } from 'react';

class SearchForm extends Component {
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
    const minCaracters = 2;
    return (
      <form>
        <input
          placeholder="Nome do Artista"
          value={ artistName }
          name="artistName"
          data-testid="search-artist-input"
          onChange={ this.handleChange }
        />
        <button
          data-testid="search-artist-button"
          disabled={ artistName.length < minCaracters }
        >
          Pesquisar
        </button>
      </form>
    );
  }
}

export default SearchForm;
