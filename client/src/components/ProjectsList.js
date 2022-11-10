import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom";

import Project from './Project';


const ProjectsList = ({ name, description }) => {

  const navigate = useNavigate();

  const navToProject = () => {
    navigate('/project', {state:{name, description}});
  }

  return (
    <li className="singleCard">
      <Card className="text-center projectList">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="primary" onClick={navToProject}>Review</Button>
        </Card.Body>
      </Card>
    </li>

  );
}

export default ProjectsList;
