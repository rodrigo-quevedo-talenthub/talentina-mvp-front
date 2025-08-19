import { Route, Routes } from 'react-router-dom'
import CandidatosPage from './pages/CandidatosPage'
import DashboardPage from './pages/DashboardPage'

function App() {


  return (
    <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/candidatos" element={<CandidatosPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  )
}

export default App
