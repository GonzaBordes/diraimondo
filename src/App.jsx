import './App.css'
import './index.css'
import Home from './pages/home'
import useSmoothScroll from './hooks/UseSmoothScroll.jsx'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import ImagenPublicitaria from './pages/singleServices/ImagenPublicitaria'
import InfluencersMarketing from './pages/singleServices/InfluencersMarketing'
import Pr from './pages/singleServices/Pr'
import ContentLab from './pages/singleServices/ContentLab'
import Events from './pages/singleServices/Events'



function App() {

  useSmoothScroll()
  
  const pathname = useLocation()

    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);

  return (
    <>
      <Routes 
      >
        <Route path='/' element={<Home/>}/>
        <Route path='/imagen-publicitaria' element={<ImagenPublicitaria  />}/>
        <Route path='/influencers-marketing' element={<InfluencersMarketing />}/>
        <Route path='/pr' element={<Pr />}/>
        <Route path='/content-lab' element={<ContentLab />}/>
        <Route path='/eventos' element={<Events />}/>
      </Routes>   
    </>
    
    
  )
}

export default App
