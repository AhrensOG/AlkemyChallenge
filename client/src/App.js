import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CreateOperation from './components/CreateOperation'

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path='/createOperation' element={<CreateOperation/>}></Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
