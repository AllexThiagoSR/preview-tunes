import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

class Login extends Component {
  state = {
    name: '',
    loading: false,
  };

  handleChange = ({ target: { name, type, checked, value } }) => {
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  onClickSendButton = async () => {
    const { name } = this.state;
    const { history: { push } } = this.props;
    this.setState({
      loading: true,
    });
    await createUser({ name });
    this.setState({
      loading: false,
    }, () => push('/search'));
  };

  render() {
    const { name, loading } = this.state;
    if (loading) return <Loading />;
    const minCaracters = 3;
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="login-name">
            <input
              id="login-name"
              value={ name }
              name="name"
              data-testid="login-name-input"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ name.length < minCaracters }
            onClick={ this.onClickSendButton }
          >
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
