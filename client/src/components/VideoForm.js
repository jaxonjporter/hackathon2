import React from 'react'
import { Form, Button, Header, } from 'semantic-ui-react'
import { AuthConsumer,} from '../providers/AuthProvider'

class VideoForm extends React.Component {
  state = { formValues: { title: "", video_url: "", }, }




  handleSubmit = (e) => {
    e.preventDefault();
    const { formValues: { title, video_url, }, } = this.state;
    const { auth: { user, }, } = this.props
    e.preventDefault()
    debugger
    
    // axios.post('/api/courses', course)
    //   .then( res => {
    //     this.props.toggleNewCourse()
    //     this.props.resetCourseList()
    //   })
      // .catch (res => {
      //   console.log(res);
      // })
  
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState( { formValues: { [name]: value, }, }); 
  }

  render() {
    const { formValues: { title, video_url, }, } = this.state
    return (
      <>
        <Header content='Add New Video' />
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label='Video Title'
            required
            autoFocus
            name='title'
            value={title}
            placeholder='Title'
            onChange={this.handleChange}
          />
          <Form.Input
            label='Video url'
            required
            autoFocus
            name='video_url'
            value={video_url}
            placeholder='Video Url'
            onChange={this.handleChange}
          />
          <Button>
            Submit
          </Button> 
        </Form>
        <br />
      </>

    )
  }
}

class ConnectedVideoForm extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <VideoForm { ...this.props } auth={auth} /> }
      </AuthConsumer>
    )
  }
}
export default ConnectedVideoForm