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

// Simplified project data
const projectData = {
	'townhall': {
		title: 'Townhall',
		subtitle: 'Full-Stack Community Platform',
		heroImage: Atria,
		description: 'A full-stack community platform built for volunteer collaboration, featuring user onboarding, post/comment creation, media uploads, and real-time communication.',
		detailedDescription: `Townhall is a comprehensive community platform designed to facilitate volunteer collaboration and community engagement. As the lead developer, I was responsible for architecting the entire system from the ground up.

The platform features a robust user management system with secure authentication, real-time communication through WebSockets, and a sophisticated media handling system. I implemented a layered backend architecture using Django that ensures scalability and maintainability.

Key features include user onboarding and profile management, real-time post and comment system, media upload and management, WebSocket-based notifications, and responsive design for all devices.`,
		techStack: ['Python', 'Django', 'React/Next.js', 'PostgreSQL', 'WebSockets', 'Redis'],
		liveUrl: 'https://atriacoop.netlify.app/',
		githubUrl: null,
		images: [Atria, Atria1, Atria2, Atria3, Atria4, Atria5, Atria6, Atria7],
		tags: ['Full Stack Development', 'UX Research']
	},
	'speedie': {
		title: 'Speedie',
		subtitle: 'Car Care Companion App',
		heroImage: Speedie,
		description: 'An app designed to help everyday drivers understand their car better with interactive dashboard that explains vehicle warning lights, urgency levels, and repair advice.',
		detailedDescription: `Speedie is a comprehensive car care companion app that demystifies vehicle warning lights and provides actionable advice for drivers. The app features an interactive dashboard that explains vehicle warning lights with urgency levels, repair advice, and educational videos.

I designed and developed the entire application with a focus on user experience and accessibility. The app includes a playful radial menu that lays the foundation for future tools like a service scheduler, AI mechanic assistant, and mileage tracker.

The biggest challenge was taking complex automotive information and making it digestible for everyday drivers. I used progressive disclosure to present information in digestible chunks, implemented a modular component system with TypeScript for type safety, and conducted accessibility testing to ensure the app works for everyone.`,
		techStack: ['React', 'TypeScript', 'Tailwind CSS'],
		liveUrl: 'https://speedie.vercel.app/',
		githubUrl: 'https://github.com/RYeeAnn/speedie',
		images: [Speedie, Speedie2, Speedie3, Speedie4, Speedie5],
		tags: ['Front-End Development', 'UX Design']
	},
	'cruisin': {
		title: "Cruisin'",
		subtitle: 'Vehicle Assistance Platform',
		heroImage: cruisin,
		description: 'My first full-stack project created to help drivers with vehicle concerns. Built during my time at BrainStation with React, Express, and MySQL.',
		detailedDescription: `Cruisin' was my first full-stack project, built during my time at BrainStation. The platform was designed to help drivers with their vehicle concerns by providing a comprehensive database of common issues and solutions.

This project taught me the fundamentals of full-stack development, from database design and API creation to responsive frontend implementation. I learned how to structure a complete web application and deploy it using modern tools and platforms.`,
		techStack: ['React', 'Express.js', 'Sass', 'MySQL'],
		liveUrl: 'https://cruisin.netlify.app/',
		githubUrl: 'https://github.com/RYeeAnn/brainstation-capstone',
		images: [cruisin],
		tags: ['Full Stack Development']
	},
	'dinotype': {
		title: 'DinoType',
		subtitle: 'Type Racing Game',
		heroImage: DinoType,
		description: 'A type racing game built with Python and Pygame. Currently in development to explore game development concepts.',
		detailedDescription: `DinoType is a personal project to explore game development and Python programming. The game challenges players to type quickly and accurately while avoiding obstacles and competing against time.

This project is helping me learn game development concepts including game loops, collision detection, animation, and state management. It's also an opportunity to improve my Python skills and understand the pygame library.`,
		techStack: ['Python', 'Pygame'],
		liveUrl: null,
		githubUrl: 'https://github.com/RYeeAnn/dinotype',
		images: [DinoType],
		tags: ['Game Development']
	},
	'shnake': {
		title: 'Shnake',
		subtitle: 'Classic Snake Game',
		heroImage: shnakeGif,
		description: 'A classic snake game built with React to practice state management and game logic implementation.',
		detailedDescription: `A classic snake game inspired by the games I played as a kid. Created and coded using JavaScript and React.js, this was my first ever "game" I have coded.

The project helped me understand interactive state management, timing functions, collision detection, and how to handle user input in a real-time environment. It was a fun way to practice React while building something nostalgic and engaging.`,
		techStack: ['JavaScript', 'React', 'Sass'],
		liveUrl: null,
		githubUrl: 'https://github.com/RYeeAnn/Shnake',
		images: [shnakeGif],
		tags: ['Game Development']
	},
	'simon-says': {
		title: 'Simon Says',
		subtitle: 'Memory Game',
		heroImage: simonSays,
		description: 'A classic memory game to test short-term memory skills, built with React and modern JavaScript.',
		detailedDescription: `A simple and classic game to test your short-term memory skills. Built with React and JavaScript for interactive gameplay.

This project helped me practice state management patterns, sequence handling, audio integration, and creating engaging user interfaces. It was a great way to explore React's capabilities while building something fun and interactive.`,
		techStack: ['JavaScript', 'React', 'Sass'],
		liveUrl: null,
		githubUrl: 'https://github.com/RYeeAnn/simon-says',
		images: [simonSays],
		tags: ['Game Development']
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

	return (
		<div className="project-detail">
			<div className="project-detail__container">
				{/* Hero Section */}
				<div className="project-detail__hero">
					<div className="project-detail__hero-image">
						<img src={project.heroImage} alt={project.title} />
					</div>
					
					<div className="project-detail__hero-content">
						<div className="project-detail__tags">
							{(project.tags || []).map((tag, index) => (
								<span key={index} className="project-detail__tag">{tag}</span>
							))}
						</div>
						<h1 className="project-detail__title">{project.title}</h1>
						<p className="project-detail__description">{project.description}</p>
						
						<div className="project-detail__links">
							{project.liveUrl && (
								<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-detail__link project-detail__link--primary">
									View Live
								</a>
							)}
							{project.githubUrl && (
								<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-detail__link project-detail__link--secondary">
									View Code
								</a>
							)}
						</div>
					</div>
				</div>

				{/* Detailed Description */}
				{project.detailedDescription && (
					<div className="project-detail__detailed-description">
						<h3>About This Project</h3>
						<p>{project.detailedDescription}</p>
					</div>
				)}

				{/* Tech Stack */}
				{project.techStack && project.techStack.length > 0 && (
					<div className="project-detail__tech">
						<h3>Technologies</h3>
						<div className="project-detail__tech-list">
							{project.techStack.map((tech, index) => (
								<span key={index} className="project-detail__tech-item">{tech}</span>
							))}
						</div>
					</div>
				)}

				{/* Gallery */}
				{project.images && project.images.length > 1 && (
					<div className="project-detail__gallery">
						<h3>Gallery</h3>
						<div className="project-detail__gallery-grid">
							{project.images.slice(1).map((image, index) => (
								<div 
									key={index} 
									className="project-detail__gallery-item"
									onClick={() => openImageModal(image)}
								>
									<img src={image} alt={`${project.title} screenshot ${index + 1}`} />
								</div>
							))}
						</div>
					</div>
				)}
			</div>

			{/* Image Modal */}
			{isModalOpen && selectedImage && (
				<div className="project-detail__modal" onClick={closeImageModal}>
					<div className="project-detail__modal-content" onClick={(e) => e.stopPropagation()}>
						<button 
							className="project-detail__modal-close"
							onClick={closeImageModal}
						>
							×
						</button>
						<img src={selectedImage} alt="Full size screenshot" />
					</div>
				</div>
			)}
		</div>
	);
}

export default ProjectDetail; 