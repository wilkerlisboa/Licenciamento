import { useState } from 'react'
import MenuRouter from './routes/MenuRouter'
import Login from './pages/Login'
import Menu from './components/Menu'
import Usuarios from './pages/Usuarios'
import Lojas from './pages/Lojas'
import Licencas from './pages/Licencas'


function App() {
  const [count, setCount] = useState(0)

  return (
    <MenuRouter />
  )
}

export default App
