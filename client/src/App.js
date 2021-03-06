import React from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import VideoForm from './components/VideoForm'
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import VideoShow from './components/VideoShow'
import Playlists from './components/Playlists'
import PlaylistShow from './components/PlaylistShow'

import CommentForm from './components/CommentForm';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path='/addvideo' component={VideoForm} />
          <Route exact path='/videos/:video_id/newcomment' component={CommentForm} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/videos/:video_id/VideoShow" component={VideoShow} />
          <Route exact path="/Playlists" component={Playlists} />
          <Route exact path="/PlaylistShow" component={PlaylistShow} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;
