import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from './Navbar';

import { useNavigate, useLocation } from "react-router-dom";


const Project = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const projectList = () => {
        navigate('/projectlist')
    }

    return (
        <div>
            <Navbar />
            <h4 className="card-title">Project Name</h4>
            <Card className="text-center projectCard">
                <Card.Body>
                    <Card.Title>{location.state.name}</Card.Title>
                    <Card.Text>
                        {location.state.description}
                    </Card.Text>
                    <Button onClick={projectList}>Back</Button>
                </Card.Body>
            </Card>
        </div>

    )
}

export default Project;
