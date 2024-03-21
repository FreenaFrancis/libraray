import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Admin() {
const [message,setmessage]=useState();
const navigate=useNavigate()
  useEffect(()=>{
    axios.get('http://localhost:7000/api/user/admin')
       
    .then( res =>{
      if(res.data==="Success"){
       setmessage("OK")
      }
      else{
        navigate('/home')
      }
      
    })
    .catch(err=>console.log(err))
  })
  return (
    <div>
  <h3>admin page{message}</h3>

  <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link> <Link to ={'/addbooks'}>Add books</Link></Nav.Link>
            <Nav.Link>Add librarian</Nav.Link>
            <Nav.Link>View users</Nav.Link>
            <Nav.Link>Taken books</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Admin
