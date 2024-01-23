import React, { Component } from 'react'
import { Form, FormGroup, Col, Input, Button, Label } from 'reactstrap';

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      telNum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    })
  }
  handleSubmit = event => {
    console.log(this.state);
    event.preventDefault();
  }
  render() {
    document.title = "Contact"
    return (
      <div className="container">
        <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
          <div className="col-12 col-md-7">
            <h2>Send Us Your Feedback</h2>
          </div>
          <div className='col-12 col-md-7'>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor='firstName' md={2}>First Name:</Label>
                <Col md={10}>
                  <Input type='text' name='firstName' placeholder='First Name' value={this.state.firstName} onChange={this.handleInputChange} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor='lastName' md={2}>Last Name:</Label>
                <Col md={10}>
                  <Input type='text' name='lastName' placeholder='Last Name' value={this.state.lastName} onChange={this.handleInputChange} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor='telNum' md={2}>Tel. Num:</Label>
                <Col md={10}>
                  <Input type='number' name='telNum' placeholder='Tel Num' value={this.state.telNum} onChange={this.handleInputChange} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor='email' md={2}>E-mail:</Label>
                <Col md={10}>
                  <Input type='email' name='email' placeholder='E-mail' value={this.state.email} onChange={this.handleInputChange} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input type='checkbox' name='agree' checked={this.state.agree} onChange={this.handleInputChange} /> <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input type='select' name='contactType' value={this.state.contactType} onChange={this.handleInputChange}>
                    <option>Tel. Num</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor='message' md='2'>Your Feedback</Label>
                <Col md={10}>
                  <Input type='textarea' name='message' value={this.state.message} rows='8' onChange={this.handleInputChange} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type='submit' color='primary'>
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact