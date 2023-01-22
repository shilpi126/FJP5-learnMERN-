//import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {Inc, Dec} from './states/reducers/index';

function App() {
  const currState = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>React Redux Tutorial</h1>
      <div style={{width: '100%', diplay:'flex', alignItems:'center', flexDirection:'column'}}>
        <h1>{currState}</h1>
        <div>
        <button onClick={() => dispatch(Inc(10))} style={{marginRight:"20px", height:"30px", width:"50px"}}>Inc</button>
        <button onClick={() => dispatch(Dec(5))} style={{ height:"30px", width:"50px"}}>Dec</button>
        </div>
      </div>

    </div>
  );
}

export default App;
