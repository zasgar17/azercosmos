import Navbar from './Components/Navbar'
import HeroCarousel from './Components/HeroCarousel'
import RectanglesSection from './Components/RectanglesSection'
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact'
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
import Page3 from './Components/Page3'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    
      <div className="pt-[100px]">
    </div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroCarousel />
            <RectanglesSection />
          </>
        } />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </>
  )
}

export default App