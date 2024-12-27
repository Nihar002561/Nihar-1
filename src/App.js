// import logo from './logo.svg';
// import './App.css';
import { Route, Routes,Router } from "react-router-dom";
import Login from "./Pages/Login";
import Ragister from "./Pages/Ragister";
import Profile from "./Pages/Profile";
import Home from "./Homepage/Home"
import MainProfile from "./Pages/MainProfile";
import Experienceplus from "./Pages/Experienceplus";
import Experienceedit from "./Pages/Experienceedit";
import Home1 from "./Example/Home1";
import Profile1 from "./Example/Profile1";


function App() {
  return (
    <>
   
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/ragister" element={<Ragister/>}/>
      <Route path="/profile" element={<Profile/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/mainprofile" element={<MainProfile/>} />
      <Route path="/experience-plus" element={<Experienceplus/>} />
      <Route path="/experience-edit" element={<Experienceedit/>} />
      <Route path="/home1" element={<Home1/>} />
      <Route path="/profile1" element={<Profile1/>} />
    </Routes>

  
    {/* <Profile/> */}
    {/* <Home/> */}
  </>
  );
}

export default App;
