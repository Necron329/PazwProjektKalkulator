import Header from "./Header"
import SpalinyAut from './SpalinyAut'
import Footer from "./Footer"
import Radiany from "./Radiany"

function App() {
  return (
    <>
      <Header />
      <div className='w-full flex min-h-[72.5vh]'>
        <SpalinyAut />
        <Radiany />
      </div>
      <Footer />
    </>
  )
}

export default App
