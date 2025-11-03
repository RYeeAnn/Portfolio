import React, { useEffect } from 'react';
import './AboutPage.scss';
import ryan2 from '../../assets/ryan2.jpg';

function AboutPage() {
    useEffect(() => {
        // Always scroll to top when About page loads
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page">
            <div className="about-page__container">
                <div className="about-page__content">
                    <h1 className="about-page__title">Meet the Developer!</h1>
                    
                    <div className="about-page__main">
                        <div className="about-page__image">
                            <img src={ryan2} alt="Ryan Yee" />
                        </div>
                        
                        <div className="about-page__text">
                            <div className="about-page__story">
                                <p>
                                    I'm Ryan, a software developer based in Vancouver, BC. I studied Electrical Engineering at UBC and worked in the automotive industry before jumping into software. That switch happened after I did a 12-week bootcamp to further strengthen my skills at BrainStation, and that's what got me started on this path.
                                </p>
                                
                                <p>
                                    I've built a diverse range of projects that solve real-world problems. I created a Chrome extension that automates job application form filling, saving hours for job seekers. I built a professional website for my mother's hair salon business, complete with online booking to modernize her client management. I developed a community platform for volunteers, car care apps to help drivers understand their vehicles, and even some fun games to explore different programming concepts.
                                </p>
                                
                                <p>
                                    What I really love is creating things that people actually find useful and enjoy using. Whether it's a productivity tool, a business website, or an educational game, I focus on building solutions that make a real difference in people's lives.
                                </p>
                                
                                <p>
                                    In my spare time, you'll find me checking out new coffee shops around the city, working on my car, playing games, playing badminton, or playing volleyball.
                                </p>
                                
                                <p>
                                    I hand-coded this portfolio using React and SCSS to showcase my journey as a software developer.
                                </p>
                            </div>
                            
                            <div className="about-page__location">
                                <span>– Based in Vancouver, BC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
