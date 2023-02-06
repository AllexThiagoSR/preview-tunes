import React, { Component } from 'react';
import AlbumsList from '../components/AlbumsList';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';

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
      <div data-testid="page-search">
        <Header />
        <SearchForm
          handleChange={ this.handleChange }
          artistName={ artistName }
          buttonClickFunc={ this.searchAlbums }
        />
        {
          loading ? <Loading /> : (
            <>
              <h2>{ text }</h2>
              <AlbumsList albums={ albums } artistName={ artistName } />
            </>
          )
        }
      </div>
    );
  }
}

export default Search;
