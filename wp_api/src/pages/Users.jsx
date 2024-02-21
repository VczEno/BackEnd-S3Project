import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Alert, Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import { SingleUserCard } from '../components/SingleUserRow';

export const Users = ({endpoint}) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] =useState (false)
    const [errMsg, setErrMsg] = useState ('')

     function getAllUsers() {
        setIsLoading(true)
        axios.get(endpoint+'users')
        .then(response => setUsers(response.data))
        .catch(error => {
            console.log(error)
            setErrMsg(error.message)})
        .finally(() => setIsLoading(false) )
        
    }

    useEffect(() => {
        getAllUsers()
        console.log(users)
    },[])

    return (  
       
    <Container>
        <h1 className='text-center m-5 fw-bold display-3'>Lista Utenti</h1>
        {isLoading && users.length === 0 && <Spinner animation='border'/>} {/* migliorare */}
        {errMsg && <Alert>{errMsg}</Alert>} {/* migliorare */}
       
            {users && users.length !== 0 &&
            <>
             <Table striped bordered hover className='text-center'>
             <thead>
             <tr>
             <th>#</th>
             <th>Immagine Profilo</th>
             <th>Nome</th>
             <th>Nickname</th>
             </tr>
             </thead>
             <tbody>
            
           {users.map((u, index) => {
            return (
            <tr key={index}>
                <SingleUserCard u={u} />
            </tr>
        )})} 
        
        </tbody>
            
            </Table>  
            <p className='text-center text-info border border-info rounded-4 py-2 px-4 mt-3'>N.B. - in questa pagina saranno visualizzati solo gli utenti che hanno pubblicato almeno un post</p>
            </>
            }
            
        

        
       
       
        
    </Container>
    

  )
}
