import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  render() {
    const { artistName, handleChange, buttonClickFunc } = this.props;
    const minCaracters = 2;
    return (
      <form className="search-form">
        <input
          placeholder="Nome do Artista ou Banda:"
          value={ artistName }
          name="artistName"
          data-testid="search-artist-input"
          onChange={ handleChange }
        />
        <button
          data-testid="search-artist-button"
          disabled={ artistName.length < minCaracters }
          onClick={ buttonClickFunc }
          type="button"
        >
          Pesquisar
        </button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  artistName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  buttonClickFunc: PropTypes.func.isRequired,
};

export default SearchForm;
