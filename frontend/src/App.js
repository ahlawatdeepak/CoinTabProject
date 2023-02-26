import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Component/Home/Home';
import { UserDetails } from './Component/UserDetail/User';

function App() {
  return (
    <div className="App">
         
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details' element={<UserDetails/>}/>
         </Routes>
    </div>
  );
}

export default App;
