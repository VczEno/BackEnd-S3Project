import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Container, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export const PostDetails = ({endpoint}) => {
    const { id } = useParams()
    const [post, setPost] = useState([])
    const [isLoading, setIsLoading] =useState (false)
    const [errMsg, setErrMsg] = useState ('')

  function getPostData () {
    setIsLoading(true)
    axios.get(endpoint+'posts/'+id)
    .then(response => setPost(response.data))
    .catch(error => {console.log(error)
        setErrMsg(error.message)})
        .finally(() => setIsLoading(false) )
  }


  useEffect(getPostData, [])

  return (
    <Container className='dettaglio-post'>
        {isLoading && <Spinner animation='border'/>} {/* migliorare */}
        {errMsg && <Alert>{errMsg}</Alert>} {/* migliorare */}
        {!isLoading && !errMsg && post.title &&
        <>
            
                <p><span dangerouslySetInnerHTML={{__html:post.content.rendered}} /></p>
        </>      }
    </Container>
  )
}
