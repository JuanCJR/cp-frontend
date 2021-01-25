import React, { Component } from "react";
import { Card, Form, FormControl, Button } from "react-bootstrap";
import axios from 'axios'
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
export default class Signin extends Component {

    state={
        username:"",
        passwd:""
    }

    onChangeUsername = (e) =>{
        const username = e.target.value;
        this.setState({
            username
        })
    }


    onChangePasswd = (e) =>{
        const passwd = e.target.value;
        this.setState({
            passwd
        })
    }

    onSubmit = async (e)=>{
        e.preventDefault();
        const {username,passwd} = this.state;
        const result = await axios.post("http://localhost:8081/api/v1/usuarios/signin",{
            username,passwd
        });
        
        if(result.data.code===1){
            this.props.changePage("home");
        }else{
            alert(result.data.message)
        }


    }



  render() {
    return (
      <Card className="mt-5">
     
        <Card.Body>
          <Form onSubmit={this.onSubmit}>
            <Form.Group onChange={this.onChangeUsername}>
              <Form.Label>Nombre de Usuario </Form.Label>
              <Form.Control/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group onChange={this.onChangePasswd} >
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
