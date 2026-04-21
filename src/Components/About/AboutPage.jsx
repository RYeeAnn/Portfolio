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
                    <h1 className="about-page__title">About Me</h1>
                    
                    <div className="about-page__main">
                        <div className="about-page__image">
                            <img src={ryan2} alt="Ryan Yee" />
                        </div>
                        
                        <div className="about-page__text">
                            <div className="about-page__story">
                                <p>
                                    Hey, I'm Ryan!
                                </p>

                                <p>
                                    I'm a Full Stack Developer based in Vancouver with over two years of experience across fintech, community platforms, and software education. I've built financial planning tools and an AI assistant used by financial advisors, shipped a full-stack community platform from the ground up, and taught programming to kids on the side.
                                </p>

                                <p>
                                    I build things to solve problems I've actually faced. A payment and roster tool for recreational sports leagues. A website for my mom's salon when word of mouth was her only footprint. A Chrome extension to cut down the time spent applying to jobs. The motivation is usually the same: if something is genuinely frustrating, it's worth fixing.
                                </p>

                                <p>
                                    Outside of work, I'm on a volleyball court, hunting for good coffee around Vancouver, or working on my car.
                                </p>
                            </div>

                            <div className="about-page__location">
                                <span>Vancouver, BC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
