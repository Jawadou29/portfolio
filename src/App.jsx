import './App.scss'
import NavBar from './design-system/components/NavBar'
import Home from './design-system/pages/Home'
import Skills from './design-system/pages/Skills'
import { Routes, Route } from 'react-router-dom'
import Projects from './design-system/pages/Projects'
import Contact from './design-system/pages/Contact'
function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/skills' element={<Skills />}/>
      <Route path='/works' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
