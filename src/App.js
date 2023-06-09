import './App.css';
import './css/style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
    {/* <MyContextProvider> */}
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
        </Routes>
      </div>
    {/* </MyContextProvider> */}

  </BrowserRouter>
  );
}

export default App;
