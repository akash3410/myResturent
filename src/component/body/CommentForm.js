import React, { Component } from 'react'
import { Button, Form, Input } from 'reactstrap'

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      rating: '',
      comment: ''
    }
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    this.props.addComment(this.props.dishId, this.state.rating, this.state.author, this.state.comment)

    this.setState({
      author: '',
      rating: '',
      comment: ''
    })
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input type="text" name="author" value={this.state.author} placeholder='Your Name' onChange={this.handleInputChange} required />
          <br />
          <Input type='select' name='rating' value={this.state.rating} onChange={this.handleInputChange} required>
            <option></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          <br />
          <Input type='textarea' name='comment' value={this.state.comment} placeholder='Coment Here!' rows={6} onChange={this.handleInputChange} required />
          <br />
          <Button type='submit' color='primary'>Submit Comment</Button>
        </Form>
      </div>
    )
  }
}

export default CommentForm;