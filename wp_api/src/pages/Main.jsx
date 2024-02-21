import React, { useState, useEffect } from 'react'
import { Alert, Button, Card, Col, Container, Form, FormGroup, InputGroup, Row, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { SinglePostCard } from '../components/SinglePostCard';

export const Main = ({endpoint}) => {

    
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] =useState (false)
    const [errMsg, setErrMsg] = useState ('')
    const [query, setQuery] =useState ('')

     function getAllPosts() {
        setIsLoading(true)
        axios.get(endpoint+'posts?_embed')
        .then(response => setPosts(response.data))
        .catch(error => {
            console.log(error)
            setErrMsg(error.message)})
        .finally(() => setIsLoading(false) )
        
    }

    function handleSearch() {
        setIsLoading(true)
        axios.get(endpoint+'posts?_embed&search='+query)
        .then(response => setPosts(response.data))
        .catch(error => {
            console.log(error)
            setErrMsg(error.message)})
        .finally(() => setIsLoading(false) ) 
    console.log(posts)
    }

    useEffect(() => {
        getAllPosts()
        console.log(posts)
    },[])

    return (  
       
    <Container>
         <h1 className='text-center m-5 fw-bold display-3'>Lista Articoli</h1>
         
         <InputGroup className="my-5 w-50 mx-auto">
        <Form.Control
          placeholder="Ricerca tra gli articoli..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e)=> setQuery(e.target.value)}
        />
        <Button variant="outline-success" id="button-addon2" onClick={()=> handleSearch()}>
          Cerca
        </Button>
      </InputGroup>
        
        {isLoading && posts.length == 0 && <Spinner animation='border'/>} {/* migliorare */}
        {errMsg && <Alert>{errMsg}</Alert>} {/* migliorare */}
        <Row className='row-cols-4'>
        {posts && 
           posts?.map((p, index) => {
            return (
            <Col key={index}>
                
                <SinglePostCard p={p}/>
            </Col>
        )}) }
        {!isLoading && posts.length == 0 && <h1>non ci sono post</h1> } {/* da modificare */}
        </Row>
    </Container>

  )
}
