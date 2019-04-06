import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
import VideoShow from './VideoShow'

class PlaylistShow extends React.Component {
  state = { videos: [] }

  componentDidMount() {
    debugger
    const { match: { params: { id, video_id } } } = this.props
    axios.get(`/api/videos/${video_id}/comments`)
      .then( res => this.setState({ comments: res.data, }))
    axios.get("/api/videos/")
      .then( res => this.setState({ videos: res.data, }))
  }


renderVideos = () => {
  const { videos } = this.state

  return(
  videos.map( video => (
        <Link to={VideoShow}>
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
    return(
      <div> { this.renderVideos() }</div>
    )
  }
}

export default PlaylistShow