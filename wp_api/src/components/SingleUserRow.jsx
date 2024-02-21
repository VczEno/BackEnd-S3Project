import React from 'react'
import { Button, Card, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NoImg from '../assets/img/noImg.jpg'

export const SingleUserCard = ({u}) => {

   
  return (
    <>
        <td>{u.id}</td>
        <td>
            <Image src={u.avatar_urls[48]}></Image>
        </td>
        <td>{u.name}</td>
        <td>{u.slug}</td>
       
    </>
  )
}