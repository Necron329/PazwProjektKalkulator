import { useState } from 'react'
import Header from "./Header"
import SpalinyAut from './SpalinyAut'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='w-full flex'>
        <SpalinyAut />
      </div>
    </>
  )
}

export default App
