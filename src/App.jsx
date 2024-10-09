import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import anime from 'animejs';

// CSS Import
import './App.css';
import './components/card/footCard.css'

// Component imports
import MainCard from "./components/card/MainCard.jsx";
import SubCard from "./components/card/SubCard.jsx";
import FootCard from "./components/card/FootCard.jsx";

// Image imports
import nichImage from './assets/nich.gif'; // Home Card
import otherImage from './assets/sand.jpg'; // Interest Card
import standImage from './assets/stand.jpg'; // Projects Card


// Define initial content as a constant
const initialContent = {
    image: nichImage,
    text: `From the surfboard factory to the tech office space, I like to spend my time working on the things that spark my passions. Creating and exploring as many areas of the world as I can find. Always striving to problem solve, and never afraid of a challenge. Let me share a bit of myself with you. Browse through some of my favorite works and interests. Let me know what you think.`
};

function App() {
    // State Management
    const [content, setContent] = useState(initialContent);
    const [activeCard, setActiveCard] = useState('home');

    // Anime.js Background Movement Effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth) * 100;
            const y = (clientY / window.innerHeight) * 100;

            // console.log(e)

            anime({
                targets: '.background',
                backgroundPosition: `${x}% ${y}%`,
                easing: 'easeOutExpo',
                duration: 1000
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // "Event Listener functions"
    const handleHomeClick = () => {
        // Reset the content back to the initial state
        setContent(initialContent);
        setActiveCard('home');
    }

    const handleProjectsClick = () => {
        setContent({
            image: standImage,
            text: "Here are some of the projects I’ve worked on. Each project has challenged me in different ways and helped me grow as a developer."
        });
        setActiveCard('projects');
    };

    const handleInterestsClick = () => {
        setContent({
            image: otherImage,
            text: "I have a passion for surfing and exploring the ocean, and being outdoors is always a great experience for me. I also enjoy working with my hands, constantly seeking new ways to express my creativity. Technology fascinates me as well—it's incredible how quickly it's advancing, and it never ceases to amaze me."
        });
        setActiveCard('interests')
    };

    return (
        <Container>
            <div className="background"></div> {/* Add this background div */}
            <MainCard
                name="Nicholas Holcomb"
                onHomeClick={handleHomeClick}
                onProjectsClick={handleProjectsClick}
                onInterestsClick={handleInterestsClick}
                activeCard={activeCard}
            >
                <SubCard image={content.image} text={content.text} />
                <FootCard />
            </MainCard>
        </Container>
    );
}

export default App;





