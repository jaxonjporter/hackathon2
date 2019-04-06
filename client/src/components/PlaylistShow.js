import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Container, Card, Image } from 'semantic-ui-react';

class PlaylistShow extends React.Component{
  state = {
    videos: [],
  }

componentDidMount() {
    axios.get("/api/videos")
      .then( res => this.setState({ videos: res.data, }))
}

  renderVideos = () => {
    const { videos } = this.state

    return(
    videos.map( video => (
          <Link to={`/videos/${video.id}/VideoShow`} key={video.id}>
            <Card style={{ width: '150px', height: '100px'}}>
              <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
              <Card.Content>
              <Card.Header>{video.title}</Card.Header>
              </Card.Content>
            </Card>
          </Link>
    )
    ))
  }

  render () {
    return (
      <Container>
        <Card.Group itemsPerRow={4}>
          {this.renderVideos()}
        </Card.Group>
      </Container>
    )
  }
}

export default PlaylistShow;
