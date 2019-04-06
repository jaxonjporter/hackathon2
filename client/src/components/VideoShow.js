import React, {Fragment} from 'react'
import { Container, Segment, Image, Button, Header, Grid, Divider, Icon, Search, Card } from 'semantic-ui-react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Player, ControlBar, } from 'video-react';

class VideoShow extends React.Component {
  state = {
    users: 'Nate',
    videos: ['This', 'that', 'theother', 'them', 'those'],
    comments: ['poop'],
    count: 0,
    count2: 0
  }

  componentDidMount() {
    const { match: { params: { id, video_id } } } = this.props
    axios.get(`/api/videos/${video_id}/comments`)
      .then( res => {
        this.setState({ comments: res.data, })
      })
    axios.get("/api/videos/")
      .then( res => this.setState({ videos: res.data, }))
}

  renderVideos = () => {
    const { videos } = this.state

    return(
    videos.map( video => (
        <Link to='./VideoShow'>
            <Card style={{ width: '300px', height: '200px', transform: 'translate(5em)'}}>
              <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
            </Card>
        </Link>
    )
    ))
  }

  renderComments = () => {
    const { comments } = this.state

    return(
    comments.map( comment => (
      <Segment style={{ width: '100%'}} key={comment.id}>
        { comment.title }
        <Segment>
          {comment.body}
        </Segment>
        <Button
          onClick={this.handleDelete}
          size='mini'
        >
        <Icon name='trash' />
      </Button>
      <Button
        size='mini'
      >
        <Icon name='edit' />
      </Button>
      </Segment>
    )
    ))
  }
  
  handleDelete = () => {
    const { id, video_id, } = this.props.match.params;
    axios.delete(`/api/videos/${video_id}/comments/${id}`)
    .then(res => {
    this.props.history.push(`/videos/${video_id}`)
    })
  }

  handleCount = (e) => {
      let _count = (this.state.count + 1)
      this.setState({ count: _count}
    )
  }

  handleCount2 = (e) => {
      let _count2 = (this.state.count2 + 1)
      this.setState({ count2: _count2}
    )
  }
  
  render() {
    const { videos, count, count2 } = this.state

    return(
      <Fragment>
        <div style={{height: '500px'}}>
        <iframe style={{width:'100%', height: '100%'}} 
          title='Endgame'
          src="https://www.youtube.com/embed/DkFmPuWYBHg" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
        </div>
        <Container>
          <Segment>
            <SegmentGroupStyles horizontal>
              <h1> {/* Video.Title */} Video Title </h1>
                <ButtonStyles
                  name="like"
                  onClick={this.handleCount}
                  inverted
                  secondary
                  >
                  Like
                  {count}
                </ButtonStyles>
                <ButtonStyles
                  name="dislike"
                  onClick={this.handleCount2}
                  inverted
                  secondary
                  >
                  Dislike
                  {count2}
                </ButtonStyles>
              </SegmentGroupStyles>
              <SegmentGroupStyles horizontal>
                <ImageStyle src="https://resources-live.sketch.cloud/files/6f304d0b-fd53-4d76-8fa4-3bbd49f2b696.png?Expires=1554685200&Signature=htQQ86E9s68e~-DlOp1k2kmORHfmxk3sZo3rVzMZaskEFSeE1ayDltK~1KCQ2V7esIq5l0Vcqf9WPyCPzJKkR~rhwlqjzXgE74DATtCvSCmNIQ28ru61dI5WKU~T3VfeanYnSkujS623uOF1aF92THVMWHWNWOh8qZOZMwPuhVk_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA" alt=""/>
                <Header as='h3'>{ /*user.name*/ } Nate Swift <br /> Subscribers 1,000 </Header> <br />
                <ButtonStyles size='small'>Add Friend</ButtonStyles>
              </SegmentGroupStyles>
                <SegmentGroupStyles>
                  <Header as='h5'> This is a description of things we weren't supposed to describe </Header>
                </SegmentGroupStyles>
          </Segment>
          <SegmentGroupStyles horizontal>
            <Segment>
              <CardGroupStyles itemsPerRow={1}>
                Comments
                { this.renderComments() }
              </CardGroupStyles>
            </Segment>
            <Segment>
              Other Videos
                { this.renderVideos() }
            </Segment>
          </SegmentGroupStyles>
        </Container>
      </Fragment>
    )
  }
}

const ImageStyle = styled(Image)`
  width: 3em !important
  height: 3em !important
`
const ButtonStyles = styled(Button)`
  transform: translate(40em) !important
  width: 6em !important
  height: 4em !important
`
const SegmentGroupStyles = styled(Segment.Group)`
  border: none !important
  box-shadow: none !important
`
const CardGroupStyles = styled(Card.Group)`
  border: none !important
  box-shadow: none !important
`

export default VideoShow
