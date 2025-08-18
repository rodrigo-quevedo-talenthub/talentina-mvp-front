import { Route, Routes } from 'react-router-dom'
import CandidatosPage from './pages/CandidatosPage'

function App() {


  return (
    <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/candidatos" element={<CandidatosPage />} />
      {/* <Route path="/admin" element={<AdminPage />} /> */}
    </Routes>
  )
}

export default App
