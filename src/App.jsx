import Header from './components/Header'
import { Outlet } from 'react-router'
import { Home } from './components/Home'

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
