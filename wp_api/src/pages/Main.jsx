import React, { useState, useEffect } from 'react'
import { Alert, Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { SinglePostCard } from '../components/SinglePostCard';

export const Main = ({endpoint}) => {

    
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] =useState (false)
    const [errMsg, setErrMsg] = useState ('')

     function getAllPosts() {
        setIsLoading(true)
        axios.get(endpoint+'posts')
        .then(response => setPosts(response.data))
        .catch(error => {
            console.log(error)
            setErrMsg(error.message)})
        .finally(() => setIsLoading(false) )
        
    }

    useEffect(() => {
        getAllPosts()
        console.log(posts)
    },[])

    return (  
       
    <Container>
        <h1>Posts</h1>
        {isLoading && <Spinner animation='border'/>} {/* migliorare */}
        {errMsg && <Alert>{errMsg}</Alert>} {/* migliorare */}
        <Row className='row-cols-4'>
        {posts && 
           posts.map((p, index) => {
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
