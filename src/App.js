
import './App.css';
import { NavBar } from './Components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './Components/Home';
import { Student } from './Components/Student';
import { Contact } from './Components/Contact';
import { DisplayData } from './Components/DisplayData';

function App() {
  return (
    
      <Router>
    <NavBar/>
    <Routes>
    
      <Route path='/home' element ={<Home/>}/>
      <Route path='/students' element ={<Student/>}>
      <Route path=':list' element={<DisplayData/>}/>
      </Route>
      <Route path='/contact' element ={<Contact/>}/>
      
    </Routes>
    </Router>
    
  );
}

export default App;
