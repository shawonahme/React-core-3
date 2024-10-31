

// import SimpleFrom from './allComponents/from/SimpleFrom'
// import StateFulFrom from './allComponents/from/StateFulFrom'


import { createContext, useState } from 'react'
import Dada from './allComponents/PropsTypes/Dada/Dada'
import './App.css'



export const myContext = createContext('gold')
// eslint-disable-next-line react-refresh/only-export-components
export const countContext = createContext(0)


function App() {
  
  const [money,setMoney] =useState(0)

  return (
    <>
      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StateFulFrom></StateFulFrom> */}

    <myContext.Provider value='gold'>
     <countContext.Provider value={[money,setMoney]}>
     <Dada></Dada>
     </countContext.Provider>
    </myContext.Provider>
        
    </>
  )
}

export default App
