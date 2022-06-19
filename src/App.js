import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/JavaScript_Files/Login';
import PageNotFound from './components/JavaScript_Files/PageNotFound'
import AddTask from './components/JavaScript_Files/AddTask';
import Navbar from './components/JavaScript_Files/Navbar';
import TaskList from './components/JavaScript_Files/TaskList';
function App() 
{
  return (
    <Router>
        <Routes>
              <Route path="/" element={<Navigate replace to="/Login" />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/AddTask" element={<AddTask/>} />
              <Route path="/TaskList" element={<TaskList/>} />
              <Route path="/Navbar" element={<Navbar/>} />
              <Route path="*" element={<Navigate replace to="/PageNotFound" />} />
              <Route path="/PageNotFound" element={<PageNotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
