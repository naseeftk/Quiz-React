


import React, { useContext } from 'react'

import { Context } from './Home'

const Contents = () => {
  
  const {correct,incorrect}=useContext(Context)
  console.log(correct)
  console.log(incorrect)
  return (
    <div>
      <h1>CORRECT ANSWERS</h1>
      {correct.map((curr)=>(
        <ul>
          <li>{curr}</li>
        </ul>
      ))}
      <h1>WRONG ANSWERS</h1>
      {incorrect.map((incurr)=>(
        <ul>
          <li>{incurr}</li>
        </ul>
      ))}
    </div>
  )
}

export default Contents
