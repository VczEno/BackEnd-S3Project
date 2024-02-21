import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NoImg from '../assets/img/noImg.jpg'

export const SinglePostCard = ({p}) => {

   
  return (
    <Card >
    <Card.Img variant="top" src={p._embedded['wp:featuredmedia'] ? p._embedded['wp:featuredmedia'][0].source_url : NoImg } />
     <Card.Body>
      <Card.Title className='text-center fs-3'>{p.title.rendered}</Card.Title>
      <Card.Text> <span dangerouslySetInnerHTML={{__html:p.excerpt.rendered}} /></Card.Text>
      <Link to = {`/post/${p.id}`} className='d-flex justify-content-center'>
  
      <Button variant="success" className='' >Dettagli articolo</Button>
      </Link>
    </Card.Body>
    <Card.Footer>
        pubblicato il: {p.date_gmt.slice(0,10)}
    </Card.Footer>
  </Card>
  )
}
