import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Lambo from './pages/Lambo'
import About from './pages/About'
import GalaxyHeader from './components/GalaxyHeader'
import WaveTrail from './components/WaveTrail'

export default function App() {
  return (
    <BrowserRouter>
      <WaveTrail />
      <GalaxyHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lambo" element={<Lambo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
