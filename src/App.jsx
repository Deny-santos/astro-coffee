import { Home, Photos, Psd, Vectors, Videos} from "./pages" 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
function App() {

  return (
    <>
      {/* <Header/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/photos" element={<Photos/>}/>
          <Route path="/psd" element={<Psd/>}/>
          <Route path="/vectors" element={<Vectors/>}/>
          <Route path="/videos" element={<Videos/>}/>
        </Routes>
      </Router>
     
    </>
  )
}

export default App
