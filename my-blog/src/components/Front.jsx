import React from 'react'
import { useContext } from 'react'
import { useNavigate,Link} from 'react-router-dom'
import {Context} from './Home'



function FrontPage() {
  const {blog,setBlog} = useContext(Context)

  

  const navigate = useNavigate()

  return (
    <div >
        <h1>Blogs</h1>
        <ul>
        {blog.map((blogs,ind) => (
          <li key={blogs.id}>
            <Link to={`/blogs/${blogs.id}`}>{blogs.title}</Link>
            
            </li>))

        }
        </ul>
        <button onClick={()=>navigate('/CreateBlog')}>Create </button>
    </div>
  )
}

export default FrontPage

