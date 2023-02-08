import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/AlbumCard.css';

class AlbumCard extends Component {
  render() {
    const { album: { collectionName, artistName, artworkUrl100 } } = this.props;
    return (
      <div className="album-card">
        <img alt={ collectionName } src={ artworkUrl100 } />
        <div>
          <h3 data-testid="album-name">{ collectionName }</h3>
          <p data-testid="artist-name">{ artistName }</p>
        </div>
      </div>
    );
  }
}

AlbumCard.propTypes = {
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

export default AlbumCard;
