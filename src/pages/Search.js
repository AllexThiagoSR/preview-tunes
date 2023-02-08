import React, { Component } from 'react';
import AlbumsList from '../components/AlbumsList';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';
import '../styles/Search.css';

class Search extends Component {
  state = {
    artistName: '',
    albums: [],
    loading: false,
    text: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  searchAlbums = async () => {
    const { artistName } = this.state;
    this.setState({
      loading: true,
    });
    const albumsFound = await searchAlbumsAPI(artistName);
    this.setState({
      albums: albumsFound,
      artistName: '',
      loading: false,
      text: `Resultado de álbuns de: ${artistName}`,
    });
  };

  render() {
    const { artistName, loading, albums, text } = this.state;
    return (
      <div data-testid="page-search" className="search-page">
        <Header />
        <div className="form-results-container">
          <SearchForm
            handleChange={ this.handleChange }
            artistName={ artistName }
            buttonClickFunc={ this.searchAlbums }
          />
          {
            loading ? <Loading /> : (
              <div className="albuns-container">
                <h2>{ text }</h2>
                <AlbumsList albums={ albums } artistName={ artistName } />
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default Search;
