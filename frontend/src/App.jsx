import { useState } from 'react'
import Login from './pages/Login'
import Menu from './components/Menu'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Menu />
  )
}

export default App
