// import logo from './logo.svg';
import './App.css';
// import Us from './components/Us';
// import Ue1 from './components/Ue1';
// import Ue2 from './components/Ue2';
// import Infinite from './components/Infinite';
// import Ue3 from './components/Ue3';
import context from './components/context/Context';
import Navbar from './components/context/Navbar'
import Parent1 from './components/context/Parent1'
import Parent2 from './components/context/Parent2'
import { useState } from 'react';
function App() {
  const [theme, setTheme] = useState(false);


  return (
    //<Us></Us>
    //<Ue1></Ue1>
    //<Ue2></Ue2>
    //<Infinite></Infinite>
    // <Ue3></Ue3>

    // aur yaha khali dabbe ko wrap kar diya
    <context.Provider value={{theme}}>  
      <button onClick={() => setTheme(!theme)}>
      Change Theme
      </button>
      <Navbar/>
      <Parent1/>
      <Parent2/>
    </context.Provider>

  );
}

export default App;
