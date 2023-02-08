import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AlbumCard from './AlbumCard';

class AlbumsList extends Component {
  render() {
    const { albums } = this.props;
    const list = (
      <ul className="albuns-list">
        {
          albums.map((album) => (
            <li key={ album.collectionId }>
              <AlbumCard album={ album } />
              <Link
                to={ `/album/${album.collectionId}` }
                data-testid={ `link-to-album-${album.collectionId}` }
              >
                Open Album
              </Link>
            </li>
          ))
        }
      </ul>
    );
    return (
      albums.length > 0 ? list : <p>Nenhum álbum foi encontrado</p>
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
