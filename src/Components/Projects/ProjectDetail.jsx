import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetail.scss';
import cruisin from '../../assets/cruisin.png';
import shnakeGif from '../../assets/shnake-gif.gif';
import simonSays from '../../assets/simon-says.gif';
import DinoType from '../../assets/DynoType.png';
import Speedie from '../../assets/speedie.png';
import Atria from '../../assets/Atria.png';

// Project data - you can expand this with more details
const projectData = {
  'townhall': {
    title: 'Townhall',
    subtitle: 'Full-Stack Community Platform',
    heroImage: Atria,
    description: 'A full-stack community platform built for volunteer collaboration, featuring user onboarding, post/comment creation, media uploads, and more.',
    longDescription: `Townhall is a comprehensive community platform designed to facilitate volunteer collaboration and community engagement. As the lead developer, I was responsible for architecting the entire system from the ground up.

The platform features a robust user management system with secure authentication, real-time communication through WebSockets, and a sophisticated media handling system. I implemented a layered backend architecture using Django that ensures scalability and maintainability.

Key features include:
• User onboarding and profile management
• Real-time post and comment system
• Media upload and management
• WebSocket-based notifications
• Responsive design for all devices`,
    techStack: ['Python', 'Django', 'Django Channels', 'React/Next.js', 'JavaScript', 'REST APIs', 'PostgreSQL/SQLite', 'Render', 'WebSockets', 'Redis', 'Netlify', 'Cloudinary'],
    liveUrl: 'https://atriacoop.netlify.app/',
    githubUrl: null,
    images: [Atria],
    story: `Building Townhall was an exciting journey that pushed me to think about community engagement in entirely new ways. The biggest challenge was creating a platform that felt alive and responsive - users needed to see updates in real-time without constantly refreshing the page.

I dove deep into WebSocket technology, learning Django Channels and implementing Redis as a backend to handle real-time communication. The moment I got the first real-time notification working, I knew we were onto something special.

Another major hurdle was designing a database architecture that could scale. I spent countless hours planning the data relationships, implementing proper indexing, and creating a layered architecture that separated concerns cleanly. This wasn't just about making it work - it was about making it work well for years to come.

The most rewarding challenge was creating an interface that non-technical users could navigate intuitively. I conducted user research, created multiple design iterations, and tested everything thoroughly. Seeing volunteers easily navigate the platform for the first time made all the late nights worth it.

This project taught me that great software isn't just about clean code - it's about understanding your users, planning for scale, and creating experiences that bring people together.`,
    challenges: [
      'Implementing real-time features with WebSockets',
      'Designing a scalable database architecture',
      'Creating an intuitive user interface for non-technical users'
    ],
    solutions: [
      'Used Django Channels for WebSocket implementation with Redis as the backend',
      'Implemented a layered architecture with clear separation of concerns',
      'Conducted user research and created multiple design iterations based on feedback'
    ],
    tags: ['Full Stack', 'UX Research', 'Community Platform']
  },
  'speedie': {
    title: 'Speedie',
    subtitle: 'Car Care Companion App',
    heroImage: Speedie,
    description: 'Speedie is an app designed to help everyday drivers understand their car better.',
    longDescription: `Speedie is a comprehensive car care companion app that demystifies vehicle warning lights and provides actionable advice for drivers. The app features an interactive dashboard that explains vehicle warning lights with urgency levels, repair advice, and educational videos.

I designed and developed the entire application with a focus on user experience and accessibility. The app includes a playful radial menu that lays the foundation for future tools like a service scheduler, AI mechanic assistant, and mileage tracker.

Key features include:
• Interactive warning light explanations
• Urgency level indicators
• Repair advice and educational content
• Responsive design for mobile devices
• Future-ready architecture for additional features`,
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://speedie.vercel.app/',
    githubUrl: 'https://github.com/RYeeAnn/speedie',
    images: [Speedie],
    story: `Speedie was born from a simple frustration - watching friends panic when their dashboard lit up with warning lights they didn't understand. I wanted to create something that would turn that moment of confusion into confidence.

The biggest challenge was taking complex automotive information and making it digestible for everyday drivers. I spent hours researching warning lights, talking to mechanics, and understanding what information drivers actually need in those stressful moments. The solution was progressive disclosure - showing the most critical information first, then allowing users to dive deeper if they want to learn more.

Designing the component architecture was another interesting puzzle. I wanted the app to be easily expandable for future features like service scheduling and AI assistance. Using TypeScript gave me the confidence to refactor and expand without breaking existing functionality.

Accessibility was non-negotiable for me. This app needed to work for everyone, whether they were using screen readers, navigating with keyboards, or had visual impairments. I tested with accessibility tools, implemented proper ARIA labels, and ensured the color contrast met WCAG guidelines.

What I love most about Speedie is how it transforms a moment of automotive anxiety into empowerment. It's not just about fixing cars - it's about giving people the knowledge to make informed decisions about their safety.`,
    challenges: [
      'Creating an intuitive interface for complex automotive information',
      'Designing a scalable component architecture',
      'Ensuring accessibility for all users'
    ],
    solutions: [
      'Used progressive disclosure to present information in digestible chunks',
      'Implemented a modular component system with TypeScript for type safety',
      'Conducted accessibility testing and implemented ARIA labels and keyboard navigation'
    ],
    tags: ['Frontend', 'UX Design', 'Mobile App']
  },
  'cruisin': {
    title: 'Cruisin\'',
    subtitle: 'Vehicle Assistance Platform',
    heroImage: cruisin,
    description: 'My first full-stack project created with the purpose of helping drivers with their vehicle concerns.',
    longDescription: `Cruisin' was my first full-stack project, built during my time at BrainStation. The platform was designed to help drivers with their vehicle concerns by providing a comprehensive database of common issues and solutions.

This project taught me the fundamentals of full-stack development, from database design to API development and frontend implementation. I learned about deployment strategies, database optimization, and user experience design.

Key features include:
• Vehicle issue database
• User account management
• Search and filtering capabilities
• Responsive web design
• RESTful API architecture`,
    techStack: ['React', 'Express.js', 'Sass', 'MySQL'],
    liveUrl: 'https://cruisin.netlify.app/',
    githubUrl: 'https://github.com/RYeeAnn/brainstation-capstone',
    images: [cruisin],
    challenges: [
      'Learning full-stack development from scratch',
      'Database design and optimization',
      'Deployment and hosting setup'
    ],
    solutions: [
      'Used MVC architecture for clean code organization',
      'Implemented proper indexing and query optimization',
      'Learned deployment strategies for both frontend and backend'
    ],
    tags: ['Full Stack', 'First Project', 'Learning']
  },
  'dinotype': {
    title: 'DinoType',
    subtitle: 'Type Racing Game',
    heroImage: DinoType,
    description: 'Currently in the process of building a type racer game for fun!',
    longDescription: `DinoType is a personal project I'm developing to explore game development and Python programming. It's a type racing game that challenges players to type words quickly and accurately while racing against time.

This project allows me to experiment with game development concepts, user input handling, and creating engaging gameplay mechanics. It's a great way to practice Python programming while building something fun and interactive.

Key features include:
• Word generation and display
• Real-time typing validation
• Score tracking and timing
• Progressive difficulty levels
• Engaging visual feedback`,
    techStack: ['Python', 'Pygame'],
    liveUrl: null,
    githubUrl: 'https://github.com/RYeeAnn/dinotype',
    images: [DinoType],
    challenges: [
      'Learning game development fundamentals',
      'Implementing real-time input handling',
      'Creating engaging gameplay mechanics'
    ],
    solutions: [
      'Studied Pygame documentation and tutorials',
      'Implemented event-driven input handling',
      'Designed progressive difficulty system'
    ],
    tags: ['Game Dev', 'Learning', 'Python']
  },
  'shnake': {
    title: 'Shnake',
    subtitle: 'Classic Snake Game',
    heroImage: shnakeGif,
    description: 'A simple snake game inspired by classic games that was played as a kid.',
    longDescription: `Shnake is my first ever game development project, inspired by the classic Snake game that many of us played growing up. I created this project to challenge myself and learn game development fundamentals using React and JavaScript.

The game features classic snake gameplay mechanics where players control a snake to eat food and grow longer, while avoiding collisions with walls and themselves. It's a simple but engaging game that demonstrates my ability to create interactive experiences.

Key features include:
• Classic snake gameplay mechanics
• Score tracking system
• Responsive controls
• Game over detection
• Smooth animations`,
    techStack: ['JavaScript', 'React', 'Sass'],
    liveUrl: null,
    githubUrl: 'https://github.com/RYeeAnn/Shnake',
    images: [shnakeGif],
    challenges: [
      'Learning game development concepts',
      'Implementing collision detection',
      'Creating smooth game loops'
    ],
    solutions: [
      'Studied game development fundamentals',
      'Used mathematical calculations for collision detection',
      'Implemented React state management for game logic'
    ],
    tags: ['Game Dev', 'First Game', 'Classic']
  },
  'simon-says': {
    title: 'Simon Says',
    subtitle: 'Memory Game',
    heroImage: simonSays,
    description: 'A simple and classic game to test your short-term memory skills.',
    longDescription: `Simon Says is a classic memory game that challenges players to remember and repeat sequences of colors and sounds. I built this project to practice React development and create an engaging, interactive experience.

The game progressively increases in difficulty as players successfully complete sequences, testing their memory and concentration skills. It's a great example of creating engaging user interactions and managing complex game state.

Key features include:
• Progressive difficulty system
• Visual and audio feedback
• Score tracking
• Game state management
• Responsive design`,
    techStack: ['JavaScript', 'React', 'Sass'],
    liveUrl: null,
    githubUrl: 'https://github.com/RYeeAnn/simon-says',
    images: [simonSays],
    challenges: [
      'Managing complex game state',
      'Implementing timing-based gameplay',
      'Creating engaging user feedback'
    ],
    solutions: [
      'Used React hooks for state management',
      'Implemented setTimeout for sequence timing',
      'Added visual and audio feedback for better user experience'
    ],
    tags: ['Game Dev', 'Classic', 'Memory Game']
  }
};

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectData[projectId];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="project-detail project-detail--not-found">
        <div className="project-detail__container">
          <h1>Project Not Found</h1>
          <p>Sorry, this project doesn't exist.</p>
          <Link to="/" className="project-detail__back-link">← Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="project-detail__container">
        {/* Back Navigation */}
        <div className="project-detail__navigation">
          <Link to="/" className="project-detail__back-link">
            ← Back to Portfolio
          </Link>
        </div>

        {/* Hero Section */}
        <div className="project-detail__hero">
          <div className="project-detail__hero-content">
            <div className="project-detail__hero-text">
              <h1 className="project-detail__title">{project.title}</h1>
              <p className="project-detail__subtitle">{project.subtitle}</p>
              <div className="project-detail__tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-detail__tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-detail__hero-image">
              <img src={project.heroImage} alt={project.title} />
            </div>
          </div>
        </div>

        {/* Project Links */}
        <div className="project-detail__links">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-detail__link project-detail__link--primary">
              View Live Project
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-detail__link project-detail__link--secondary">
              View Code
            </a>
          )}
        </div>

        {/* Project Description */}
        <div className="project-detail__section">
          <h2 className="project-detail__section-title">About This Project</h2>
          <p className="project-detail__description">{project.longDescription}</p>
        </div>

        {/* Tech Stack */}
        <div className="project-detail__section">
          <h2 className="project-detail__section-title">Technologies Used</h2>
          <div className="project-detail__tech-stack">
            {project.techStack.map((tech, index) => (
              <span key={index} className="project-detail__tech-item">{tech}</span>
            ))}
          </div>
        </div>

        {/* Project Story */}
        <div className="project-detail__section">
          <h2 className="project-detail__section-title">The Journey</h2>
          <div className="project-detail__story">
            <p className="project-detail__story-text">
              {project.story || `Building ${project.title} presented several interesting challenges that pushed my skills and creativity. ${project.challenges.map((challenge, index) => 
                index === 0 ? `The first major hurdle was ${challenge.toLowerCase()}. ` :
                index === project.challenges.length - 1 ? `Finally, I had to tackle ${challenge.toLowerCase()}. ` :
                `Then came ${challenge.toLowerCase()}. `
              ).join('')}
              
              ${project.solutions.map((solution, index) => 
                index === 0 ? `To overcome these challenges, I ${solution.toLowerCase()}. ` :
                index === project.solutions.length - 1 ? `Ultimately, I ${solution.toLowerCase()}, which proved to be the right approach.` :
                `I also ${solution.toLowerCase()}. `
              ).join('')}
              
              This project taught me valuable lessons about ${project.lessons || 'problem-solving, technical implementation, and user experience design'}, and I'm proud of how it all came together.`}
            </p>
          </div>
        </div>

        {/* Project Images */}
        {project.images.length > 1 && (
          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Project Screenshots</h2>
            <div className="project-detail__gallery">
              {project.images.map((image, index) => (
                <div key={index} className="project-detail__gallery-item">
                  <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail; 