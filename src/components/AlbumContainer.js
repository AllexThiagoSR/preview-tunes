import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AlbumContainer extends Component {
  render() {
    const { album: { collectionName, artistName } } = this.props;
    return (
      <div>
        <h3 data-testid="album-name">{ collectionName }</h3>
        <p data-testid="artist-name">{ artistName }</p>
      </div>
    );
  }
}

AlbumContainer.propTypes = {
  album: PropTypes.shape({
    artistId: PropTypes.number,
    artistName: PropTypes.string,
    collectionId: PropTypes.number,
    collectionName: PropTypes.string,
    collectionPrice: PropTypes.number,
    artworkUrl100: PropTypes.string,
    releaseDate: PropTypes.string,
    trackCount: PropTypes.number,
  }).isRequired,
};

export default AlbumContainer;
