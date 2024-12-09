

import React, { createContext, useState } from 'react'

export const Context=createContext()
const Home = ({children}) => {
  const [correct,setCorrect]=useState([])
  const [incorrect,setIncorrect]=useState([])
  const obj=[
    {id:1,qn:"kerala's biggest dist?",opt:["KL-09","Kl-10","kl-05"],ans:'KL-09'},
    {id:2,qn:"most populated dist?",opt:["KL-09","KL-10","kl-05"],ans:'KL-10'},
    {id:3,qn:"smallest dist?",opt:["KL-09","Kl-10","kl-05"],ans:"kl-05"}
  ]
  return (
    <div>
      <Context.Provider value={{correct,setCorrect,incorrect,setIncorrect,obj}}>
        {children}
      </Context.Provider>
    </div>
  )
}

export default Home

