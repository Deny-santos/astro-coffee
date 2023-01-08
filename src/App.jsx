import { Home, Planetas, Galaxias, BlackHoles, Historia} from "./pages" 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/planetas" element={<Planetas/>}/>
          <Route path="/galaxias" element={<Galaxias/>}/>
          <Route path="/blackHoles" element={<BlackHoles/>}/>
          <Route path="/historia" element={<Historia/>}/>
        </Routes>
      </Router>
     
    </>
  )
}

export default App
