import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function SearchBox() {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate('/')
    }
  }
  return (
    <Form onSubmit={submitHandler} inline='true' className='d-flex'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2'>
        Search
      </Button>
    </Form>
    /*    <Form className='d-flex' onSubmit={submitHandler} inline='true'>
      <Form.Control
        type='text'
        name='q'
        placeholder='Search'
        className='me-2'
        aria-label='Search'
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button variant='outline-success'>Search</Button>
    </Form> */
  )
}
