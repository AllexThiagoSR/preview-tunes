import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import '../styles/Favorites.css';

class Favorites extends Component {
  state = {
    loading: true,
    isFavorite: {},
    favoritesSongs: [],
  };

  async componentDidMount() {
    const favoritesSongs = await getFavoriteSongs();
    this.updateState(favoritesSongs);
  }

  handleChange = async (song) => {
    this.setState({
      loading: true,
    });
    await removeSong(song);
    const favoritesSongs = await getFavoriteSongs();
    this.updateState(favoritesSongs);
  };

  updateState = (favoritesSongs) => {
    this.setState({
      favoritesSongs,
      loading: false,
      isFavorite: favoritesSongs.reduce((acc, { trackId }) => (
        { ...acc, [trackId]: true }
      ), {}),
    });
  };

  render() {
    const { favoritesSongs, loading, isFavorite } = this.state;
    const favoritesSongsList = favoritesSongs.map((song) => (
      <li key={ song.trackId }>
        <MusicCard
          track={ song }
          checked={ isFavorite[song.trackId] }
          handleChange={ () => this.handleChange(song) }
          trackId={ Number(song.trackId) }
        />
      </li>
    ));
    const hasFavoritesSongs = (favoritesSongs.length !== 0) ? (
      <ul className="favorites-list">
        {
          favoritesSongsList
        }
      </ul>
    ) : (
      <div>
        <p>Nenhuma música favoritada</p>
      </div>
    );
    return (
      <div data-testid="page-favorites" className="favorites-page">
        <Header />
        <div className="favorites-container">
          {
            loading ? <Loading /> : hasFavoritesSongs
          }
        </div>
      </div>
    );
  }
}

export default Favorites;
