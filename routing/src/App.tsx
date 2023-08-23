import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import './App.css'
import Home from './pages/Home';
import Login from "./pages/Login";

function App() {

  return (
    <>
  <Routes>
    <Route path = "/" element = {<Home/>}/>
    <Route path="/Login" element={<Login/>}/>
  </Routes>
    </>
  )
}

export default App
