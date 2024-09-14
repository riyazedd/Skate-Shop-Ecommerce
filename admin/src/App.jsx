import { BrowserRouter, useLocation } from 'react-router-dom';
import RouterComponent from './RouterComponent';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <Navbar />}
      <RouterComponent />
    </div>
  );
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
