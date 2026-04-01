import './App.css'
import Navbar from './components/Navbar'

import Home from './components/Home'
import Projetos from './components/Projetos'
import Contato from './components/Contato'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>

    </div>
  )
}

export default App