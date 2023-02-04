import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const {
      track: { previewUrl, trackName, trackId },
      handleChange,
      checked,
    } = this.props;

    const { track } = this.props;

    return (
      <div>
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
            onChange={ ({ target }) => handleChange(track, trackId, target) }
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
    trackId: PropTypes.number,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
};

export default MusicCard;
