// import logo from './logo.svg';
// import './App.css';
import { Route, Routes,Router } from "react-router-dom";
import Login from "./Pages/Login";
import Ragister from "./Pages/Ragister";
import Profile from "./Pages/Profile";


function App() {
  return (
    <>
   
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/ragister" element={<Ragister/>}/>
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  
    {/* <Profile/> */}
  </>
  );
}

export default App;
