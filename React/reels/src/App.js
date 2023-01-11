import logo from './logo.svg';
import './App.css';
import Signup from './components/signup';
import Login from './components/login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
          
          
      </BrowserRouter>
      
    </div>
  );
}

export default App;
