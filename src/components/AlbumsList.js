import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlbumContainer from './AlbumContainer';

class AlbumsList extends Component {
  render() {
    const { albums } = this.props;
    return (
      <ul>
        {
          albums.length > 0 ? albums.map((album) => (
            <li key={ album.collectionId }>
              <AlbumContainer album={ album } />
            </li>
          )) : <p>Nenhum álbum foi encontrado</p>
        }
      </ul>
    );
  }
}

AlbumsList.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape({
    artistId: PropTypes.number,
    artistName: PropTypes.string,
    collectionId: PropTypes.number,
    collectionName: PropTypes.string,
    collectionPrice: PropTypes.number,
    artworkUrl100: PropTypes.string,
    releaseDate: PropTypes.string,
    trackCount: PropTypes.number,
  })).isRequired,
};

export default AlbumsList;
