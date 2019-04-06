import React from 'react';
import { Form, Header, Button } from "semantic-ui-react";
import {AuthConsumer,} from "../providers/AuthProvider";
import axios from 'axios';

class CommentForm extends React.Component {
  defaultValues = { title:"", body:"",};
  state = { ...this.defaultValues, };

  handleSubmit = (e) => {
    const video = this.props.match.params.video_id
    e.preventDefault();
    const comment = { ...this.state, };
    axios.post(`/api/videos/${video}/comments`, comment)
    .then( res => {
      this.props.history.push("/comments");
    })
    this.setState({ ...this.defaultValues, });
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  render(){
    const { title, body } = this.state;

    return (
      <div>
        <Header as="h1">New Comment</Header>
        <Form onSubmit={this.handleSubmit}>
            <Form.Input
              label="Title"
              title="title"
              placeholder="title"
              name="title"
              value={title}
              onChange={this.handleChange}
              required
              />
            <Form.TextArea
              label="Body"
              body="body"
              placeholder="Body"
              name="body"
              value={body}
              onChange={this.handleChange}
            />
        <Button>Submit</Button>
        </Form>

      </div>
    )
  }
}

class connectCommentForm extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <CommentForm {...this.props } auth={auth} />}
      </AuthConsumer>
    )
  }
}


export default connectCommentForm;