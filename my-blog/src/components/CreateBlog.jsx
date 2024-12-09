import React, { useContext, useState } from 'react'
import { Context } from './Home'
import {useNavigate} from 'react-router-dom'

function CreateBlog() {
    const {blog,setBlog} = useContext(Context)
    const navigate = useNavigate()
    const[title,setTitle] = useState('')
    const[body,setBody] = useState('')
    

    const handleSubmit = (e) => {
        e.preventDefault()
        setBlog([...blog, {title,body,id:Date.now()}])
        setTitle('')
        setBody('')
        navigate('/')
    }

  return (
    <div><h1>Create blog </h1>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='title' value={title}  onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" placeholder='body' value={body}  onChange={(e) => setBody(e.target.value)}/>
        
        <button type="submit" >Create</button>
    </form>
    </div>
  )
}

export default CreateBlog


