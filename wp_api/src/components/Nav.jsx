import React from 'react'
import {Container, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'



export const Nav = () => {
  return (
    <Navbar bg='secondary' >
        <Container>
          <Navbar.Brand >
            <Link to='/' className=''>
              home
            
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}
