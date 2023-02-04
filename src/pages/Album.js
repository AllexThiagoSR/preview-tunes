import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import AlbumContainer from '../components/AlbumContainer';
import PlayList from '../components/PlayList';

class Album extends Component {
  state = {
    albumInfos: {},
    tracks: [],
    // favoriteSongs: [],
    isFavorite: {},
  };

  async componentDidMount() {
    const { match: { params } } = this.props;
    const [albumInfos, ...tracks] = await getMusics(params.id);
    this.setState({
      albumInfos,
      tracks,
    });
  }

  onChangeAddFavoriteSong = ({ target: { checked, name } }) => {
    this.setState(({ isFavorite }) => ({
      isFavorite: { ...isFavorite, [name]: checked },
    }));
  };

  render() {
    const { albumInfos, tracks, isFavorite } = this.state;
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
