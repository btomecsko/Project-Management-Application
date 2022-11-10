import Navbar from './Navbar';
import { useState, useEffect } from 'react'
import ProjectsList from './ProjectsList';

const ProjectContainer = () => {
  const [teamData, setTeamData] = useState({});

  const teamID = JSON.parse(localStorage.getItem("teamID"))
  const teamN = JSON.parse(localStorage.getItem("teamNa"))

  const loadTeam = async () => {
    const response = await fetch(`http://localhost:8080/project/team/${teamID}`,{mode:"cors"});
    let data = await response.json();
    setTeamData(data);
  }

  console.log(teamData);
  useEffect(() => {
    loadTeam();
  }, []);

 
  return (
    <>
    <Navbar />
    <div className="card-container">
      <h4 className="card-title" style={{marginBottom:"-10vh", marginTop:"2vh"}}>{teamN}</h4>
      <div className="align">
      <ul className="list-group list-group-flush" style={{ display: 'flex', paddingTop: '20vh',  width: '80rem' }} >
          {teamData.length > 0 ? teamData.map(projects => (
            <ProjectsList
              key={projects.id}
              name={projects.name}
              description={projects.description}
              active={projects.active}
            />
          )) :"No projects to display!"}
        </ul>
       </div> 
    </div>
    </>
  );
}

export default ProjectContainer;
