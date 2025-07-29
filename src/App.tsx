import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import { About, Contact, LandingPage } from './pages'

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div className='w-screen h-screen bg-black overflow-x-hidden'>
          <Layout>
            <LandingPage />
            <About />
            <Contact/>
          </Layout>
        </div>
        } />
      </Routes>
    </BrowserRouter>

  )
}

export default App