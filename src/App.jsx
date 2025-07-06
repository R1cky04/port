import { HashRouter, Routes, Route } from 'react-router-dom'
import GalaxyHeader from './components/GalaxyHeader'
import WaveTrail from './components/WaveTrail'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Lambo from './pages/Lambo'

export default function App() {
  return (
    <HashRouter>
      {/* <WaveTrail /> */}
      <GalaxyHeader />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <div id="about" style={{ scrollMarginTop: '30px' }}>
                <About />
              </div>
              <div id="projects" style={{ scrollMarginTop: '30px' }}>
                <Projects />
              </div>
              <div id="contact" style={{ scrollMarginTop: '30px' }}>
                <Contact />
              </div>
            </>
          }
        />
        <Route path="/lambo" element={<Lambo />} />
      </Routes>
    </HashRouter>
  )
}
