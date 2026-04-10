import React, { useState } from 'react';
import './About.scss';
import dnaLogo from '../../assets/dnaLogo.png';
import atriaLogo from '../../assets/atriaLogo.jpeg';
import codeninjasLogo from '../../assets/codeninjasLogo.jpeg';
import sniffandbarkLogo from '../../assets/sniffandbarkLogo.jpeg';

function About() {
  const [expandedId, setExpandedId] = useState(null);

  const toggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const experiences = [
    {
      id: 0,
      role: 'Full Stack Developer',
      company: 'Dynamic Needs Analysis',
      dates: 'Nov 2025 – Present',
      logo: dnaLogo,
      fullDescription: 'Working on a large SaaS financial planning platform used by financial advisors in production. I contributed to Helix, an AI assistant built on OpenAI GPT-4, by handling document uploads and chunking them for indexing with Azure AI Search so advisors can query their own data. I also shipped production features used by real users, hardened security on several HTTP endpoints, and refactored the i18n internationalization setup to fix TypeScript compile errors that were blocking pushes to main. The codebase has 30+ API endpoints and hundreds of UI components, so a lot of the work involves understanding existing systems carefully before touching them.',
      techStack: ['React', 'TypeScript', 'Express.js', 'Azure PostgreSQL', 'OpenAI GPT-4', 'Azure AI Search', 'Tailwind CSS', 'Radix UI', 'i18next', 'Zod', 'JWT', 'Webflow'],
      current: true,
    },
    {
      id: 1,
      role: 'Full Stack Developer',
      company: 'Atria Community',
      dates: 'May 2024 – Nov 2025',
      logo: atriaLogo,
      fullDescription: 'Took ownership of full-stack development on Townhall, a volunteering platform built in collaboration with the Vancouver Food Justice Coalition (VFJC). Built 15+ RESTful APIs with Django, developed mobile-first UIs from Figma with Next.js, and shipped core features including onboarding, posts, comments, media uploads, and real-time chat using WebSockets and Redis.',
      techStack: ['Python', 'Django', 'React', 'Next.js', 'JavaScript', 'PostgreSQL', 'Redis', 'REST APIs', 'WebSockets', 'Cloudinary'],
      link: 'https://atriacoop.netlify.app',
    },
    {
      id: 2,
      role: 'Code Instructor',
      company: 'Code Ninjas',
      dates: 'Sept 2024 – Present',
      logo: codeninjasLogo,
      fullDescription: 'Teach kids aged 7–14 the foundations of JavaScript, Unity, and game development through hands-on lessons in a high-energy, mentor-style environment.',
      techStack: ['JavaScript', 'Unity'],
      current: true,
    },
    {
      id: 3,
      role: 'Web Developer',
      company: 'Sniff & Bark',
      dates: 'Feb 2024 – May 2024',
      logo: sniffandbarkLogo,
      fullDescription: 'Built custom features and internal tools for a Shopify-based e-commerce store, including solutions for order automation, dynamic pricing, and GDPR compliance, using JavaScript and XLSX integrations.',
      techStack: ['JavaScript', 'Shopify', 'XLSX'],
    },
  ];

  return (
    <section className="experience" id="about">
      <div className="experience__container">
        <h2 className="experience__title">Experience</h2>

        <div className="experience__list">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience__item">
              <button
                className="experience__header"
                onClick={() => toggle(exp.id)}
                aria-expanded={expandedId === exp.id}
              >
                <div className="experience__header-left">
                  <img src={exp.logo} alt={exp.company} className="experience__logo" />
                  <div className="experience__header-text">
                    <span className="experience__role">
                      {exp.role}
                      {exp.current && <span className="experience__current"> (current)</span>}
                    </span>
                    <span className="experience__company">{exp.company}</span>
                  </div>
                </div>
                <div className="experience__header-right">
                  <span className="experience__dates">{exp.dates}</span>
                  <span className="experience__toggle">{expandedId === exp.id ? '−' : '+'}</span>
                </div>
              </button>

              {expandedId === exp.id && (
                <div className="experience__detail">
                  <p className="experience__detail-text">
                    {exp.link ? (
                      <>
                        {exp.fullDescription.split('Townhall')[0]}
                        <a href={exp.link} target="_blank" rel="noopener noreferrer">Townhall</a>
                        {exp.fullDescription.split('Townhall')[1]}
                      </>
                    ) : (
                      exp.fullDescription
                    )}
                  </p>
                  <p className="experience__tech">{exp.techStack.join(' · ')}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
