import { useState } from 'react'
import './index.css'
import Invitation from './Components/Invitation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Invitation/>
    </>
  )
}

export default App
