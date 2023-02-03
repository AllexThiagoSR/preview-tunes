import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import ProfileEdit from './pages/ProfileEdit';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import Album from './pages/Album';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
      <>
        <p>TrybeTunes</p>
        <Switch>
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/profile" component={ Profile } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/search" component={ Search } />
          <Route exact path="/" component={ Login } />
          <Route component={ NotFound } />
        </Switch>
      </>
    );
  }
}

export default App;
