import React from 'react';
import { Container, Card, Image, Icon, Grid } from 'semantic-ui-react';

class Home extends React.Component{
  state = {
    videos: ['This', 'that', 'theother', 'them', 'those']
  }

  renderVideos = () => {
    const { videos } = this.state

    return(
    videos.map( video => (
            <Card style={{ width: '150px', height: '100px'}}>
              <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
              <Card.Content>
              <Card.Header>{video} Video Title</Card.Header>
              </Card.Content>
            </Card>
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
