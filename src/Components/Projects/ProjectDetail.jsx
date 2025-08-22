import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetail.scss';
import cruisin from '../../assets/cruisin.png';
import shnakeGif from '../../assets/shnake-gif.gif';
import simonSays from '../../assets/simon-says.gif';
import DinoType from '../../assets/DynoType.png';
import Speedie from '../../assets/speedie.png';
import Atria from '../../assets/Atria.png';
// New screenshots
import Atria1 from '../../assets/Atria1.png';
import Atria2 from '../../assets/Atria2.png';
import Atria3 from '../../assets/Atria3.png';
import Atria4 from '../../assets/Atria4.png';
import Atria5 from '../../assets/Atria5.png';
import Atria6 from '../../assets/Atria6.png';
import Atria7 from '../../assets/Atria7.png';
import Speedie2 from '../../assets/Speedie2.png';
import Speedie3 from '../../assets/Speedie3.png';
import Speedie4 from '../../assets/Speedie4.png';
import Speedie5 from '../../assets/Speedie5.png';

// Project data with optional enhanced details
const projectData = {
	'townhall': {
		title: 'Townhall',
		subtitle: 'Full-Stack Community Platform',
		heroImage: Atria,
		description: 'A full-stack community platform built for volunteer collaboration, featuring user onboarding, post/comment creation, media uploads, and more.',
		longDescription: `Townhall is a comprehensive community platform designed to facilitate volunteer collaboration and community engagement. As the lead developer, I was responsible for architecting the entire system from the ground up.

The platform features a robust user management system with secure authentication, real-time communication through WebSockets, and a sophisticated media handling system. I implemented a layered backend architecture using Django that ensures scalability and maintainability.

Key features include:\n• User onboarding and profile management\n• Real-time post and comment system\n• Media upload and management\n• WebSocket-based notifications\n• Responsive design for all devices`,
		techStack: ['Python', 'Django', 'Django Channels', 'React/Next.js', 'JavaScript', 'REST APIs', 'PostgreSQL/SQLite', 'Render', 'WebSockets', 'Redis', 'Netlify', 'Cloudinary'],
		liveUrl: 'https://atriacoop.netlify.app/',
		githubUrl: null,
		images: [Atria, Atria1, Atria2, Atria3, Atria4, Atria5, Atria6, Atria7],
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
		tags: ['Full Stack', 'UX Research', 'Community Platform'],
		role: 'Lead Full-Stack Developer',
		tools: ['Figma', 'Postman', 'Redis', 'Cloudinary'],
		timeline: '8 weeks',
		process: [
			{ title: 'Research', text: 'Spoke to volunteer coordinators, mapped core collaboration flows, and evaluated similar platforms.' },
			{ title: 'Architecture', text: 'Planned layered Django backend, designed DB schema, and selected WebSocket strategy with Channels + Redis.' },
			{ title: 'Design', text: 'Translated Figma designs into responsive UI components and interaction patterns.' },
			{ title: 'Build', text: 'Implemented APIs, real-time features, media handling, and authentication.' },
			{ title: 'Iterate', text: 'Tested with users and shipped improvements across UX and performance.' }
		]
	},
	'speedie': {
		title: 'Speedie',
		subtitle: 'Car Care Companion App',
		heroImage: Speedie,
		description: 'Speedie is an app designed to help everyday drivers understand their car better.',
		longDescription: `Speedie is a comprehensive car care companion app that demystifies vehicle warning lights and provides actionable advice for drivers. The app features an interactive dashboard that explains vehicle warning lights with urgency levels, repair advice, and educational videos.

I designed and developed the entire application with a focus on user experience and accessibility. The app includes a playful radial menu that lays the foundation for future tools like a service scheduler, AI mechanic assistant, and mileage tracker.`,
		techStack: ['React', 'TypeScript', 'Tailwind CSS'],
		liveUrl: 'https://speedie.vercel.app/',
		githubUrl: 'https://github.com/RYeeAnn/speedie',
		images: [Speedie, Speedie2, Speedie3, Speedie4, Speedie5],
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
		tags: ['Frontend', 'UX Design', 'Mobile App'],
		role: 'Product Designer & Frontend Engineer',
		tools: ['Figma', 'TypeScript', 'React', 'Axe DevTools'],
		timeline: '3 weeks',
		process: [
			{ title: 'Research', text: 'Interviewed drivers, aggregated top warning light pain-points, and defined MVP scope.' },
			{ title: 'Design', text: 'Created UI flows with progressive disclosure, built design tokens and component library.' },
			{ title: 'Build', text: 'Implemented React + TS app with responsive UI and accessible interactions.' },
			{ title: 'Polish', text: 'Added micro-interactions, refined copy, and tested accessibility across devices.' }
		]
	},
	'cruisin': {
		title: "Cruisin'",
		subtitle: 'Vehicle Assistance Platform',
		heroImage: cruisin,
		description: 'My first full-stack project created with the purpose of helping drivers with their vehicle concerns.',
		longDescription: `Cruisin' was my first full-stack project, built during my time at BrainStation. The platform was designed to help drivers with their vehicle concerns by providing a comprehensive database of common issues and solutions.`,
		techStack: ['React', 'Express.js', 'Sass', 'MySQL'],
		liveUrl: 'https://cruisin.netlify.app/',
		githubUrl: 'https://github.com/RYeeAnn/brainstation-capstone',
		images: [cruisin],
		tags: ['Full Stack', 'First Project']
	},
	'dinotype': {
		title: 'DinoType',
		subtitle: 'Type Racing Game',
		heroImage: DinoType,
		description: 'Currently in the process of building a type racer game for fun!',
		longDescription: `DinoType is a personal project to explore game development and Python programming.`,
		techStack: ['Python', 'Pygame'],
		liveUrl: null,
		githubUrl: 'https://github.com/RYeeAnn/dinotype',
		images: [DinoType],
		tags: ['Game Dev', 'Learning']
	},
	'shnake': {
		title: 'Shnake',
		subtitle: 'Classic Snake Game',
		heroImage: shnakeGif,
		description: 'A simple snake game inspired by classic games that was played as a kid.',
		longDescription: `A small game project to learn interactive state, timing, and collision handling in React.`,
		techStack: ['JavaScript', 'React', 'Sass'],
		liveUrl: null,
		githubUrl: 'https://github.com/RYeeAnn/Shnake',
		images: [shnakeGif],
		tags: ['Game Dev', 'Classic']
	},
	'simon-says': {
		title: 'Simon Says',
		subtitle: 'Memory Game',
		heroImage: simonSays,
		description: 'A simple and classic game to test your short-term memory skills.',
		longDescription: `A classic memory game built to practice React and state management patterns.`,
		techStack: ['JavaScript', 'React', 'Sass'],
		liveUrl: null,
		githubUrl: 'https://github.com/RYeeAnn/simon-says',
		images: [simonSays],
		tags: ['Game Dev', 'Memory Game']
	}
};

function ProjectDetail() {
	const { projectId } = useParams();
	const [project, setProject] = useState(null);
	const [selectedImage, setSelectedImage] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Scroll to top when project changes
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [projectId]);

	useEffect(() => {
		setProject(projectData[projectId]);
	}, [projectId]);

	const openImageModal = (image) => {
		setSelectedImage(image);
		setIsModalOpen(true);
	};

	const closeImageModal = () => {
		setIsModalOpen(false);
		setSelectedImage(null);
	};

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

	// Derived content
	const problemText = project.challenges && project.challenges.length
		? `I set out to solve a few key challenges: ${project.challenges.map((c, i) => {
			const t = c.replace(/\.$/, '');
			if (i === 0) return t.charAt(0).toUpperCase() + t.slice(1);
			if (i === project.challenges.length - 1) return `, and ${t.toLowerCase()}`;
			return `, ${t.toLowerCase()}`;
		}).join('')}.`
		: project.description;

	const solutionText = project.solutions && project.solutions.length
		? `To address these, I ${project.solutions.map((s, i) => {
			const t = s.replace(/\.$/, '');
			if (i === 0) return t.toLowerCase();
			if (i === project.solutions.length - 1) return `, and ${t.toLowerCase()}`;
			return `, ${t.toLowerCase()}`;
		}).join('')}.`
		: (project.story || 'I designed and built a focused solution that balanced usability, performance, and maintainability.');

	return (
		<div className="project-detail">
			<div className="project-detail__container">
				{/* Back Navigation */}
				<div className="project-detail__navigation">
					<Link to="/" className="project-detail__back-link">← Back to Portfolio</Link>
				</div>

				{/* Hero */}
				<div className="project-detail__hero" id="top">
					<div className="project-detail__hero-content">
						<div className="project-detail__hero-text">
							<h1 className="project-detail__title">{project.title}</h1>
							<p className="project-detail__subtitle">{project.subtitle}</p>
							<div className="project-detail__tags">
								{(project.tags || []).map((tag, index) => (
									<span key={index} className="project-detail__tag">{tag}</span>
								))}
							</div>
						</div>
						<div className="project-detail__hero-image">
							<img src={project.heroImage} alt={project.title} />
						</div>
					</div>
				</div>

				{/* Local TOC + Content Layout */}
				<div className="project-detail__layout">
					<aside className="project-detail__toc">
						<a href="#overview">Overview</a>
						{(project.role || project.tools || project.timeline) && <a href="#facts">Quick Facts</a>}
						<a href="#problem">Problem</a>
						<a href="#solution">Solution</a>
						{(project.process && project.process.length) ? <a href="#process">Process</a> : null}
						{(project.images && project.images.length > 0) && <a href="#gallery">Gallery</a>}
						{project.story && <a href="#reflection">Reflection</a>}
					</aside>

					<main className="project-detail__content">
						{/* Links */}
						<div className="project-detail__links">
							{project.liveUrl && (
								<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-detail__link project-detail__link--primary">View Live Project</a>
							)}
							{project.githubUrl && (
								<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-detail__link project-detail__link--secondary">View Code</a>
							)}
						</div>

						{/* Overview */}
						<section id="overview" className="project-detail__section">
							<h2 className="project-detail__section-title">Overview</h2>
							<p className="project-detail__description">{project.longDescription || project.description}</p>
						</section>

						{/* Quick Facts */}
						{(project.role || project.tools || project.timeline) && (
							<section id="facts" className="project-detail__section project-detail__facts">
								<div className="project-detail__facts-grid">
									{project.role && (
										<div className="project-detail__fact">
											<h3>My Role</h3>
											<p>{project.role}</p>
										</div>
									)}
									{project.tools && project.tools.length > 0 && (
										<div className="project-detail__fact">
											<h3>Tools</h3>
											<p>{project.tools.join(', ')}</p>
										</div>
									)}
									{project.timeline && (
										<div className="project-detail__fact">
											<h3>Timeline</h3>
											<p>{project.timeline}</p>
										</div>
									)}
								</div>
							</section>
						)}

						{/* Problem */}
						<section id="problem" className="project-detail__section">
							<h2 className="project-detail__section-title">The Problem</h2>
							<p className="project-detail__description">{problemText}</p>
						</section>

						{/* Solution */}
						<section id="solution" className="project-detail__section">
							<h2 className="project-detail__section-title">The Solution</h2>
							<p className="project-detail__description">{solutionText}</p>
						</section>

						{/* Process */}
						{(project.process && project.process.length) ? (
							<section id="process" className="project-detail__section project-detail__process">
								<h2 className="project-detail__section-title">Process</h2>
								<ol className="project-detail__steps">
									{project.process.map((step, idx) => (
										<li key={idx} className="project-detail__step">
											<div className="project-detail__step-index">{idx + 1}</div>
											<div className="project-detail__step-content">
												<h3>{step.title}</h3>
												<p>{step.text}</p>
											</div>
										</li>
									))}
								</ol>
							</section>
						) : null}

						{/* Tech Stack */}
						<section className="project-detail__section">
							<h2 className="project-detail__section-title">Technologies Used</h2>
							<div className="project-detail__tech-stack">
								{(project.techStack || []).map((tech, index) => (
									<span key={index} className="project-detail__tech-item">{tech}</span>
								))}
							</div>
						</section>

						{/* Gallery */}
						{project.images && project.images.length > 0 && (
							<section id="gallery" className="project-detail__section">
								<h2 className="project-detail__section-title">Gallery</h2>
								<div className="project-detail__gallery">
									{project.images.map((image, index) => (
										<div 
											key={index} 
											className="project-detail__gallery-item"
											onClick={() => openImageModal(image)}
											role="button"
											tabIndex={0}
											onKeyDown={(e) => {
												if (e.key === 'Enter' || e.key === ' ') {
													e.preventDefault();
													openImageModal(image);
												}
											}}
										>
											<img src={image} alt={`${project.title} screenshot ${index + 1}`} />
										</div>
									))}
								</div>
							</section>
						)}

						{/* Reflection */}
						{project.story && (
							<section id="reflection" className="project-detail__section">
								<h2 className="project-detail__section-title">Reflection</h2>
								<p className="project-detail__description">{project.story}</p>
							</section>
						)}
					</main>
				</div>
			</div>

			{/* Image Modal */}
			{isModalOpen && selectedImage && (
				<div className="project-detail__modal-overlay" onClick={closeImageModal}>
					<div className="project-detail__modal-content" onClick={(e) => e.stopPropagation()}>
						<button 
							className="project-detail__modal-close"
							onClick={closeImageModal}
							aria-label="Close modal"
						>
							×
						</button>
						<img 
							src={selectedImage} 
							alt="Full size project screenshot" 
							className="project-detail__modal-image"
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default ProjectDetail; 