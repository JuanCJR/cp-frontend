import React, { Component } from "react";
import NavBar from "./navbar/NavBar";
import Signin from './user/Signin'    
import {Container,Row,Col,Button,Card,Form} from 'react-bootstrap'

export default class Home extends Component {
  
  state={
      page:"signin",
      tareas:[{
        nro:1,
        titulo:"Hacer tarea",
        descripccion:"debo hacer la tarea :C"
      },
      {
        nro:2,
        titulo:"Hacer tarea 2",
        descripccion:"debo hacer la tarea :C"
      },
      {
        nro:3,
        titulo:"Hacer tarea3",
        descripccion:"debo hddddddddacer la tarea :C"
      }]
  }
  
    render() {
    return (
      <div>
        <NavBar  />
        <Container>

        <Row>
            <Col>
            <this.renderPages pages={this.state.page} changePage={this.changePage} />
            </Col>
        </Row>
        </Container>

      </div>
    );
  }

  renderPages = (props) => {
    const { pages,changePage } = props;
    switch (pages) {
      case "home":
        return <this.HomeArray/>;
      case "signin":
        return <Signin changePage={changePage}/>;
    }
  };


  changePage = (page)=>{
      this.setState({
          page:page
      })
  }


  HomeArray = ()=>{

    return <div>
        {this.state.tareas.map(t=>{
            return<Card>
                <Card.Title>{t.nro} - {t.titulo} </Card.Title>
                <Card.Body>{t.descripccion}</Card.Body>
            </Card>
        })}
    </div>
  }
}
