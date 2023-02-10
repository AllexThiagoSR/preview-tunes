import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MusicCard from './MusicCard';

class PlayList extends Component {
  render() {
    const { tracks, handleChange, favoritesSongsIds } = this.props;
    return (
      <div>
        <ul className="playlist">
          {
            tracks.map((track) => (
              <li key={ track.trackId }>
                <MusicCard
                  track={ track }
                  handleChange={ handleChange }
                  checked={ favoritesSongsIds[track.trackId] }
                  trackId={ track.trackId }
                />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

PlayList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({
    previewUrl: PropTypes.string,
    trackName: PropTypes.string,
  })).isRequired,
  handleChange: PropTypes.func.isRequired,
  favoritesSongsIds: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default PlayList;
