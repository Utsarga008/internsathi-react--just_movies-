import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios'
function NavBar() {
    const[text, setText]=useState('Search Movies')
    const[movie, setMovie]=useState([])
const changeText= (event) =>{
setText(event.target.value)
}
const getMovie=(e)=>{
    e.preventDefault();
    axios.get(`http://www.omdbapi.com/?s=${text}&apikey=f546c317`)
    .then((response)=>{
        console.log(response)
        setMovie(response.data.Search)
    })
}
    return (
<>
    <Navbar bg="dark" variant={'dark'} expand="lg">
      <Container fluid>
        <Navbar.Brand href="">Just Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
    
          </Nav>
          <Form className="d-flex" onSubmit={getMovie}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={text}
              onChange={changeText}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='container my-3'>
    <div className='row'>
    
  {
    movie.map((value, index) =>{
        return(
            <div className="col-3">
            <Card style={{ width: '18rem' , margin:"20px"}}>
            <Card.Img variant="top" height={200} width={200} src={value.Poster} />
            <Card.Body style={{width: "18rem", }}>
              <Card.Title>{value.Year}</Card.Title>
              <Card.Text>
               {value.Title}
              </Card.Text>
              <Button variant="success"> More</Button>
            </Card.Body>
          </Card>
            </div>

        )
    })
  }
    </div>
    </div>
    </>
    );
}

export default NavBar;

