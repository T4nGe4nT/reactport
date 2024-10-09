import './mainCard.css';
import { Row, Button } from 'react-bootstrap';

export default function MainCard({ name, onHomeClick, onProjectsClick, onInterestsClick, activeCard, children }) {
    return (
        <div className="main-card p-4">
            {/* Header */}
            <h1>{name}</h1>

            {/* Navigation Buttons */}
            <Row className="button-group">
                <Button
                    className={`btn-black ${activeCard === 'home' ? 'active' : ''}`}
                    onClick={onHomeClick}
                >
                    Home
                </Button>
                <Button
                    className={`btn-black ${activeCard === 'projects' ? 'active' : ''}`}
                    onClick={onProjectsClick}
                >
                    Projects
                </Button>
                <Button
                    className={`btn-black ${activeCard === 'interests' ? 'active' : ''}`}
                    onClick={onInterestsClick}
                >
                    Interests
                </Button>
            </Row>

            <hr />

            {/* Children (like SubCard) */}
            {children}
        </div>
    );
}
