import Navbar from "./Components/Navbar/Navbar"
import {BrowserRouter} from 'react-router-dom'
import RouterComponent from "./RouterComponent"
import Footer from "./Components/Footer/Footer"


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RouterComponent />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
