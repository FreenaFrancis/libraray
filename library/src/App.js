
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './pages/Signup';
import Login from './pages/Login'
import Home from './components/Home';
import Admin from './components/Admin';
import AddBooks from './components/AddBooks'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
     <Route path='/register' element={<Signup/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/home' element={<Home/>}></Route>
     <Route path='/admin' element={<Admin/>}></Route>
     <Route path='/addbooks' element={<AddBooks/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
