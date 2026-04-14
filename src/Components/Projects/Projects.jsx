import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.scss';

const projects = [
  {
    id: 'rally',
    name: 'Rally',
    subtitle: 'Sports captain & payment tracker',
    description: 'A full-stack web app that helps recreational sports captains manage rosters, track per-player payments, and send payment reminders. Also supports non-captains tracking their own personal dues.',
    tech: 'React · TypeScript · Tailwind CSS · Node.js · Express · PostgreSQL · Prisma · JWT',
    live: 'https://rally-app.netlify.app',
  },
  {
    id: 'townhall',
    name: 'Townhall',
    subtitle: 'Volunteer community platform',
    description: 'A full-stack community platform built in collaboration with the Vancouver Food Justice Coalition. Took ownership of 15+ RESTful APIs, real-time chat with WebSockets, and translating Figma designs into responsive UIs.',
    tech: 'Python · Django · React · Next.js · PostgreSQL · WebSockets · Redis · Cloudinary',
    live: 'https://atriacoop.netlify.app/',
  },
  {
    id: 'ruby-hair-salon',
    name: "Ruby's Hair Salon",
    subtitle: 'Freelance booking site for a private salon',
    description: "Freelance project for my mother's private hair salon. Replaced a manual notebook with an online booking system. Clients browse services and book appointments without calling.",
    tech: 'React · TypeScript · Tailwind CSS',
    live: 'https://www.rubyshairsalon.ca/',
  },
  {
    id: 'applying-assistant',
    name: 'Applying Assistant',
    subtitle: 'Chrome extension for job applications',
    description: 'A Chrome extension that auto-fills job application forms from one-click templates. Cuts application time from 20+ minutes to under 5. Available on the Chrome Web Store.',
    tech: 'JavaScript · Chrome Extensions API · HTML · CSS',
    live: 'https://chromewebstore.google.com/detail/applying-assistant/jemddgjafimcndlkmbjkpimnedbmccee',
  },
  {
    id: 'speedie',
    name: 'Speedie',
    subtitle: 'Car care guide for everyday drivers',
    description: "Helps everyday drivers understand their car's warning lights. Interactive dashboard with urgency levels, repair cost estimates, and educational videos.",
    tech: 'React · TypeScript · Tailwind CSS',
    live: 'https://speedie.vercel.app/',
  },
  {
    id: 'dinotype',
    name: 'DinoType',
    subtitle: 'Type racer game',
    description: 'A typing speed game built with Python and Pygame, compiled to WebAssembly with Pygbag so it runs directly in the browser with no install needed.',
    tech: 'Python · Pygame · Pygbag',
    live: 'https://ryeeann.github.io/DinoType/',
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h2 className="projects__title">Projects</h2>
        <div className="projects__list">
          {projects.map((project) => (
            <article key={project.id} className="projects__item">
              <div className="projects__item-top">
                <div className="projects__item-heading">
                  <h3 className="projects__name">{project.subtitle}</h3>
                  <span className="projects__subtitle">{project.name}</span>
                </div>
                <div className="projects__links">
                  <a
                    href={project.live || undefined}
                    target={project.live ? '_blank' : undefined}
                    rel={project.live ? 'noopener noreferrer' : undefined}
                    className="projects__link"
                  >
                    Live ↗
                  </a>
                  <Link to={`/project/${project.id}`} className="projects__link">
                    Details →
                  </Link>
                </div>
              </div>
              <p className="projects__desc">{project.description}</p>
              <p className="projects__tech">{project.tech}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
