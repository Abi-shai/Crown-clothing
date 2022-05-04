import { Routes, Route } from "react-router-dom"
import Navigation from "../components/Navigation/Navigation"
import Home from "../Routes/Home/Home"
import Auth from "../Routes/Auth/Authentification"


const Shop = () => {
  return (
    <div>
      <p>Shop</p>
    </div>
  )
}

const App = () => {

  return (
    <Routes>

      <Route path="/" element={<Navigation />}>
        <Route
          index
          element={<Home />}
        />
        <Route path="shop" element={<Shop/>}/>
        <Route path="auth" element={<Auth />}/>
      </Route>
      
    </Routes>
  )

}

export default App
