import React, { createContext, useState } from 'react'



export const Context = createContext()

function Home({children}) {
    const[blog,setBlog] = useState([])

  return (
    <div>
        <Context.Provider value={{blog,setBlog}}>
            {children}
        </Context.Provider>
    </div>
  )
}

export default Home




