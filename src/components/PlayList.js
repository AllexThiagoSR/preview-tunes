import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MusicCard from './MusicCard';

class PlayList extends Component {
  render() {
    const { tracks } = this.props;
    return (
      <div>
        <ul>
          {
            tracks.map((track) => (
              <li key={ track.trackId }>
                <MusicCard track={ track } />
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
};

export default PlayList;
