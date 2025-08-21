import { Route, Routes } from 'react-router-dom'
import CandidatosPage from './pages/CandidatosPage'
import DashboardPage from './pages/DashboardPage'
import HomePage from './pages/HomePage'



function App() {


  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/candidatos" element={<CandidatosPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  )
}

export default App
