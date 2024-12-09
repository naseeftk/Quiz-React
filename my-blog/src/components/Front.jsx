
import React, { useContext } from 'react'
import { Context } from './Home'
import { useNavigate } from 'react-router-dom'

const Front = () => {
  const{correct,setCorrect,incorrect,setIncorrect,obj}=useContext(Context)
  const navigate=useNavigate()
  const submit=()=>{
    navigate('/content')
 
    }
    const handle=(slctd,corct)=>{
      if(slctd===corct){
        setCorrect([...slctd,slctd])
      }else {
        setIncorrect([...slctd,slctd])
      }

  }
  return (
    <div>
      {obj.map((curr)=>(
        <div>
          <h1>{curr.qn}</h1>
<input type="radio" value={curr.opt[0]} name={`${curr.id}`} onClick={(()=>handle(curr.opt[0],curr.ans))} /> <label>{curr.opt[0]}</label>
<input type="radio" value={curr.opt[1]} name={`${curr.id}`}onClick={(()=>handle(curr.opt[1],curr.ans))} /><label>{curr.opt[1]}</label>
<input type="radio" value={curr.opt[2]} name={`${curr.id}`} onClick={(()=>handle(curr.opt[2],curr.ans))} /><label>{curr.opt[2]}</label>

</div>
      ))}
     
<button type='button' onClick={submit}>submit</button>                                                                                                  

    </div>
  )
}

export default Front

