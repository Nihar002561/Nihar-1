import { Route, Routes } from "react-router-dom";
import Ragister from "./Ragister";
import Login from "./Login";

function App() {
  return (
    <>
      <Routes>
          <Route path="/ragister" element={<Ragister/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </>
  );
}

export default App;
