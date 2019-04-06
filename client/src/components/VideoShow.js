import React, {Fragment} from 'react'
import { Container, Segment, Image, Button, Header, Grid, Divider, Icon, Search, Card } from 'semantic-ui-react';
import styled from 'styled-components'

class VideoShow extends React.Component {
  state = {
    user: 'Nate'
  }

  render() {
    
    const { user } = this.state
    return(
      <Fragment>
        <Image style={{width: '100%', height: '35em', position: 'relative'}} src="https://images.unsplash.com/photo-1528818955841-a7f1425131b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt=""/>
        <Container>
          <Segment>
            <Segment.Group horizontal>
              <h1> {/* Video.Title */} Video Title </h1>
                <Button
                  name="like"
                  inverted
                  secondary
                  >
                  Like
                </Button>
                <Button
                  name="dislike"
                  inverted
                  secondary
                  >
                  Dislike
                </Button>
              </Segment.Group>
              <Segment.Group horizontal>
                <ImageStyle src="https://resources-live.sketch.cloud/files/6f304d0b-fd53-4d76-8fa4-3bbd49f2b696.png?Expires=1554685200&Signature=htQQ86E9s68e~-DlOp1k2kmORHfmxk3sZo3rVzMZaskEFSeE1ayDltK~1KCQ2V7esIq5l0Vcqf9WPyCPzJKkR~rhwlqjzXgE74DATtCvSCmNIQ28ru61dI5WKU~T3VfeanYnSkujS623uOF1aF92THVMWHWNWOh8qZOZMwPuhVk_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA" alt=""/>
                <Header as='h3'>{ /*user.name*/ } Nate Swift <br /> Subscribers 1,000 </Header> <br />
                <Button>Add Friend</Button>
              </Segment.Group>
                <Segment>
                  <Header as='h5'> This is a description of things we weren't supposed to describe </Header>
                </Segment>
          </Segment>
            <Segment placeholder>
              <Grid columns={2} stackable textAlign='center'>

                <Grid.Row verticalAlign='middle'>
                  <Grid.Column>
                    <Segment>
                      {/* loop through comments */} Comments1
                    </Segment>
                  </Grid.Column>

                  <Grid.Column>
                    Other Videos
                      <Card style={{ width: '150px', height: '100px'}}>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
                        <Card.Content>
                        <Card.Header>Video Title</Card.Header>
                        </Card.Content>
                      </Card>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
        </Container>
      </Fragment>
    )
  }
}

const ImageStyle = styled(Image)`
  width: 3em !important
  height: 3em !important
`

export default VideoShow