import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CreateOperation from './components/CreateOperation'
import UpadateOperation from './components/UpdateOperation';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path='/createOperation' element={<CreateOperation/>}></Route>
            <Route path='/updateOperation/:id' element={<UpadateOperation/>}></Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
