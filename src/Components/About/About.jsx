import React from 'react';
import './About.scss';
import ryan from '../../assets/ryan.jpg';
import name from '../../assets/name.png';
import location from '../../assets/location.png';
import title from '../../assets/title.png';
import resume from '../../assets/resume.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';

function About() {
    

    const resumeLink = "https://drive.google.com/file/d/1PTZkQPTzJpxWeNHoa-W8ezn3VbdpPR-V/view?usp=sharing";
    const linkedinLink = "https://www.linkedin.com/in/ryeean/";
    const githubLink = "https://github.com/RYeeAnn";

    return (
        <div className="about" id="about">
            <div className="about__container">
                <div className="about__text-container">
                    <div className="about__inside-container">
                        <img className='about__image' src={ryan} alt="Ryan" />
                            <div className="about__information">
                                <div className="about__paragraphs">
                                    <p><img src={name} alt="Name" className="about__icons" />Ryan Yee</p>
                                    <p><img src={location} alt="Location" className="about__icons" />Vancouver, BC</p>
                                    <p><img src={title} alt="Title" className="about__icons" />Software Developer</p>
                                    <a href={resumeLink}>
                                    <p><img src={resume} alt="Resume" className="about__icons" /><b>Resume</b><i>Click me!</i></p>
                                    </a>
                                    <a href={linkedinLink}>
                                    <p><img src={linkedin} alt="Linkedin" className="about__icons" /><b>Linkedin</b></p>
                                    </a>
                                    <a href={githubLink}>
                                        <p><img src={github} alt="Github" className="about__icons" /><b>Github</b></p>
                                    </a>
                                </div>
                            </div>
                                <div className="about__me">
                                <h2 className="about__title">About Me</h2>
                                <div className="about__text">
                                    <p>Hi, I’m Ryan Yee – a software developer with a strong foundation in backend and frontend technologies and a passion for solving complex problems through code. I went to school at UBC and a bootcamp for software development at BrainStation. My journey into tech began with a background in Electrical Engineering, where I honed my analytical skills and problem-solving mindset. Since transitioning into software development, I’ve focused on creating efficient, scalable solutions and delivering user-centered designs.</p>
                                    <span>Currently, I’m a Software Developer Intern at Atria Community, where I’ve built APIs, led frontend projects, and improved team processes. I have hands-on experience with Python, JavaScript, and C#, building and maintaining RESTful APIs, optimizing application performance, and collaborating closely with UX/UI designers. I’m particularly skilled in front-end technologies, with a focus on React.</span>
                                    <p>One of my favorite projects is CruisinV2, an app I developed to help users better understand vehicle maintenance through an intuitive and responsive interface.</p>
                                    <span>Outside of work, I enjoy playing volleyball and badminton, and staying active through exercise!</span>
                                    {/* <p>Reminiscing back to the '90s brings memories of CD-based gaming consoles, dial-up internet, and the era of Windows 95. It was a time when technology was on the rise, poised to change the world forever. As a child, I was exposed to the wonders of dial-up internet, Game Boys, and flip phones. Needless to say, I was in love with technology. I spent countless hours in front of the computer, captivated by the screen and all it had to offer.</p> */}
                                    {/* <p>However, my fascination wasn't limited to technology alone; I had another passion—cars. Growing up, I was drawn to automobiles, and I chose a career path deeply intertwined with the world of cars. Just as cars were evolving, so was technology. The days of waiting for the internet to dial up were long gone, games had evolved significantly, and we transitioned from simple flip phones to smartphones that have become indispensable in our lives.</p> */}
                                    {/* <p>My journey began by dipping my toes into self-learning HTML and CSS. Eventually, I committed all my time and energy to a 12-week intensive software development bootcamp at BrainStation in the summer of 2023. Along the way, I've grown and evolved, but I'm fully aware that this is just the beginning. The learning will never stop, and I couldn't be more excited about it. My journey as a developer has only just begun, and I'm eager to see where it leads.</p>
                                    <p>Growing up, I was drawn to automobiles, and I chose a career path deeply intertwined with the world of cars. As much as I love cars, I realized that I wanted to keep them as a beloved hobby while finding myself on a new journey as a developer. Initially, I hesitated, thinking it might be too late for me to transition into a new career after dedicating so much time to something else. For years, fear held me back, and I kept pushing aside my dreams. However, I finally mustered the courage to pursue my true passion.</p> */}
                                    <a href="/blog"><p className="about__blog"><b>Check out my blog!</b></p></a>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About