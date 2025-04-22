import { useState } from 'react'
import Header from "./Header"
import SpalinyAut from './SpalinyAut'
import Radiany from './Radiany'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='w-full flex'>
        <SpalinyAut />
        <Radiany />
      </div>
    </>
  )
}

export default App
