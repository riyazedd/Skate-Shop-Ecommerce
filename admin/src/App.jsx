import {BrowserRouter} from 'react-router-dom'
import RouterComponent from './RouterComponent'
import Navbar from './Components/Navbar/Navbar'


function App() {
  return (
   <BrowserRouter>
      <Navbar />
      <RouterComponent />
   </BrowserRouter>
  )
}

export default App
