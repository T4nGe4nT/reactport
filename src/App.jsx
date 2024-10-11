import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import anime from 'animejs';

// CSS Import
import './App.css';
import './components/card/footCard.css'
import './components/card/projectaccordion.css'

// Component imports
import MainCard from "./components/card/MainCard.jsx";
import SubCard from "./components/card/SubCard.jsx";
import FootCard from "./components/card/FootCard.jsx";
import ProjectAccordion from "./components/card/ProjectAccordion.jsx";

// Image imports
import nichImage from './assets/nich.gif'; // Home Card
import otherImage from './assets/sand.jpg'; // Interest Card



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
            const x = (clientX / window.innerWidth) * 150;
            const y = (clientY / window.innerHeight) * 150;

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

    // Define your projects data
    // const projectsData = [
    //     {
    //         image: cumulusImage,
    //         title: 'Cumulus Cast',
    //         description: 'A sleek and efficient weather application that fetches real-time weather data for any desired ZIP code using RESTful API integration.',
    //     },
    //     {
    //         image: todoImage,
    //         title: 'To Do List',
    //         description: 'A simple yet powerful to-do list application that allows users to effortlessly add and complete tasks, leveraging local storage for persistence.',
    //     },
    //     {
    //         image: restoImage,
    //         title: 'Restro Management',
    //         description: 'A comprehensive restaurant management application built in Java with a Swing GUI, featuring order tracking, inventory management, and user authentication.',
    //     }
    // ];

    // Event Handler Functions
    const handleHomeClick = () => {
        // Reset the content back to the initial state
        setContent(initialContent);
        setActiveCard('home');
    };

    const handleProjectsClick = () => {
        setActiveCard('projects');
    };

    const handleInterestsClick = () => {
        setContent({
            image: otherImage,
            text: "I have a passion for surfing and exploring the ocean, and being outdoors is always a great experience for me. I also enjoy working with my hands, constantly seeking new ways to express my creativity. Technology fascinates me as well—it's incredible how quickly it's advancing, and it never ceases to amaze me."
        });
        setActiveCard('interests');
    };

    return (
        <Container>
            <div className="background"></div>
            <MainCard
                name="Nicholas Holcomb"
                onHomeClick={handleHomeClick}
                onProjectsClick={handleProjectsClick}
                onInterestsClick={handleInterestsClick}
                activeCard={activeCard}
            >
                {activeCard === 'projects' ? (
                    <ProjectAccordion />
                ) : (
                    <SubCard image={content.image} text={content.text} />
                )}
                <FootCard />
            </MainCard>
        </Container>
    );
}

export default App;
