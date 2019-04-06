import React from 'react'
import { Card, Header, Image, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Playlist extends React.Component {
  state = {
    playlists: ['edm', 'rap', 'dubstep']
  }

  renderPlaylists = () => {
    const { playlists } = this.state

    return(
    playlists.map( p => (
          <Link to='/PlaylistShow'>
            <Card style={{ width: '150px', height: '100px'}}>
              <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
              <Card.Content>
              <Card.Header>{p.title}</Card.Header>
              </Card.Content>
            </Card>
          </Link>
    )
    ))
  }

  render () {
    return (
      <Grid col={4} style={{ transform: 'translate(0, 20em)'}}>
        { this.renderPlaylists()}
      </Grid>
    )
  }
}