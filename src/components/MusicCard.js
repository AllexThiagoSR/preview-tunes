import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/MusicCard.css';

class MusicCard extends Component {
  render() {
    const {
      track: { previewUrl, trackName },
      handleChange,
      checked,
      trackId,
    } = this.props;

    const { track } = this.props;
    return (
      <div className="music-card">
        <span>{ trackName }</span>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          {' '}
          <code>audio</code>
          .
        </audio>
        <label htmlFor={ `favorite-${trackId}` }>
          Favorita
          <input
            type="checkbox"
            id={ `favorite-${trackId}` }
            name={ trackId }
            data-testid={ `checkbox-music-${trackId}` }
            checked={ checked }
            onChange={ ({ target }) => handleChange(track, target) }
          />
        </label>
      </div>
    );
  }
}

MusicCard.defaultProps = {
  checked: false,
};

MusicCard.propTypes = {
  track: PropTypes.shape({
    previewUrl: PropTypes.string,
    trackName: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  trackId: PropTypes.number.isRequired,
};

export default MusicCard;
