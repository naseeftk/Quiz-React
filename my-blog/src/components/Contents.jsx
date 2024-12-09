import React,{useContext} from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { Context } from './Home'

function Contents() {
    const navigate = useNavigate()
const {blogId} = useParams()

const {blog} = useContext(Context)
const specific = blog.find((blogs) => blogs.id === Number(blogId))

  return (
    <div>
        <div >
        <h1>Blogs contents</h1>
        <h1>Title: {specific.title}</h1>
        <p>Body: {specific.body}</p>
        </div>
        <button onClick={()=> navigate('/')}>Go Back</button>
    </div>

  )
}

export default Contents



