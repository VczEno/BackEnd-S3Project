import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const SinglePostCard = ({p}) => {

   
  return (
    <Card>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body>
      <Card.Title>{p.title.rendered}</Card.Title>
      <Card.Text> <span dangerouslySetInnerHTML={{__html:p.excerpt.rendered}} /></Card.Text>
      <Link to = {`/post/${p.id}`}>
      <Button variant="primary" >Dettagli articolo</Button>
      </Link>
    </Card.Body>
    <Card.Footer>
        postato il:
        {p.date_gmt}
    </Card.Footer>
  </Card>
  )
}
