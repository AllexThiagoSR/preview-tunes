import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import AlbumContainer from '../components/AlbumContainer';
import PlayList from '../components/PlayList';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';

class Album extends Component {
  state = {
    albumInfos: {},
    tracks: [],
    // favoriteSongs: [],
    isFavorite: {},
    loading: false,
  };

  async componentDidMount() {
    const { match: { params } } = this.props;
    const [albumInfos, ...tracks] = await getMusics(params.id);
    this.setState({
      albumInfos,
      tracks,
    });
  }

  onChangeAddFavoriteSong = async ({ target: { checked, name } }) => {
    const { tracks } = this.state;
    this.setState(({ isFavorite }) => ({
      isFavorite: { ...isFavorite, [name]: checked },
      loading: true,
    }));
    const songToAdd = tracks.find(({ trackId }) => trackId === Number(name));
    await addSong(songToAdd);
    this.setState({
      loading: false,
    });
  };

  render() {
    const { albumInfos, tracks, isFavorite, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div data-testid="page-album">
        <Header />
        <AlbumContainer album={ albumInfos } />
        <PlayList
          tracks={ tracks }
          handleChange={ this.onChangeAddFavoriteSong }
          favoritesSongsIds={ isFavorite }
        />
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
