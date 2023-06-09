import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import AlbumCard from '../components/AlbumCard';
import PlayList from '../components/PlayList';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';
import '../styles/Album.css';

class Album extends Component {
  state = {
    albumInfos: {},
    tracks: [],
    isFavorite: {},
    loading: false,
  };

  async componentDidMount() {
    const { match: { params } } = this.props;
    const [albumInfos, ...tracks] = await getMusics(params.id);
    const favoriteSongs = await getFavoriteSongs();
    const isFavorite = favoriteSongs.reduce((acc, { trackId }) => ({
      ...acc,
      [trackId]: true,
    }), {});
    this.setState({
      albumInfos,
      tracks,
      isFavorite,
    });
  }

  onChangeAddFavoriteSong = async (songClicked, { name, checked }) => {
    const { isFavorite } = this.state;
    this.setState({
      isFavorite: { ...isFavorite, [name]: checked },
      loading: true,
    });
    if (checked) await addSong(songClicked);
    else await removeSong(songClicked);
    this.setState({
      loading: false,
    });
  };

  render() {
    const { albumInfos, tracks, isFavorite, loading } = this.state;
    const albumPage = (
      <>
        <AlbumCard album={ albumInfos } />
        <PlayList
          tracks={ tracks }
          handleChange={ this.onChangeAddFavoriteSong }
          favoritesSongsIds={ isFavorite }
        />
      </>
    );
    return (
      <div data-testid="page-album" className="album-page">
        <Header />
        <div className="main-sec">
          {
            loading ? <Loading /> : albumPage
          }
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};

export default Album;
