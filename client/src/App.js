import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Announcements from "./components/Announcements";
import ProjectContainer from "./components/ProjectContainer";
import Project from "./components/Project";


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Announcements />} />
          <Route path="/projectlist" element={<ProjectContainer />} />
          <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}


export default App;
