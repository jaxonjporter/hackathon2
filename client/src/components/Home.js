import React from 'react';
import axios from 'axios';
import { Container, Card, Image, Icon, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class Home extends React.Component{
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
        <img style={{padding: '2em'}} src="https://resources-live.sketch.cloud/files/d9fc305c-8df6-4489-9f71-dbea5ee55e8e.png?Expires=1554685200&Signature=NcUG7be96efssTVli~U1inA7foPiWqkCrtEPtj~XoqEppgKfWBTsNWwuY-twH8HAt~k9gUmuV5h1J~vqHOI2vpzop6p5mXc-zjQ~TUGdjfRDmS5N98uObIy0XSoAPSFHSLvo40~T6G3AjsjxZysd0FjjKjC2uxWHI9xolt2CT58_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA" alt=""/>
        <Card.Group itemsPerRow={4}>
          {this.renderVideos()}
        </Card.Group>
      </Container>
    )
  }
}

export default Home;
