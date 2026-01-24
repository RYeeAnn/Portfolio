import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetail.scss';
import ShnakeGif from '../../assets/ShnakeGif.gif';
import Shnake1 from '../../assets/Shnake1.png';
import Shnake2 from '../../assets/Shnake2.png';
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
import ApplyingAssistant2 from '../../assets/ApplyingAssistant2.png';
import ApplyingAssistant3 from '../../assets/ApplyingAssistant3.png';
import ApplyingAssistant4 from '../../assets/ApplyingAssistant4.png';
import ApplyingAssistant5 from '../../assets/ApplyingAssistant5.png';
import ApplyingAssistant6 from '../../assets/ApplyingAssistant6.png';
import ApplyingAssistantVideo from '../../assets/ApplyingAssistantVideo.mov';
import RHS from '../../assets/RHS.png';
import RHSFigma from '../../assets/RHS-Figma.png';
import ApplyingAssistantFigma from '../../assets/ApplyingAssistant-Figma.png';
import AtriaFigma from '../../assets/Atria-Figma.png';
import SpeedieFigma from '../../assets/Speedie-Figma.png';
import SolidryHero from '../../assets/Solidry.png';

// Simplified project data
const projectData = {
	'applying-assistant': {
		title: 'Applying Assistant',
		subtitle: 'Chrome Extension for Job Applications',
		heroImage: ApplyingAssistantFigma,
		description: 'A Chrome extension that automates job application form filling with smart field detection and one-click templates.',
		detailedDescription: `As someone actively job searching, I was spending hours rewriting the same responses to common questions like "Where do you see yourself in 5 years?" and "What is your greatest strength/weakness?" I built this project to solve a personal problem of spending too much time answering repetitive questions in job applications.

The Chrome extension automatically detects form fields on job application pages and provides one-click templates for common questions. It intelligently recognizes different field types and suggests relevant pre-written responses that I can customize on the fly. No more copying and pasting from a separate document or retyping the same answers over and over.

Building this taught me a lot about the Chrome Extensions API, content script injection, and DOM manipulation. The biggest challenge was making the field detection work across different job sites with varying HTML structures. I had to create flexible selectors that could adapt to different form layouts while still being reliable enough to fill the right fields with the right content.`,
		techStack: ['JavaScript', 'Chrome Extensions API', 'HTML', 'CSS'],
		liveUrl: `https://applyingassistant.netlify.app/`,
		chromeStoreUrl: 'https://chromewebstore.google.com/detail/applying-assistant/jemddgjafimcndlkmbjkpimnedbmccee',
		githubUrl: 'https://github.com/RYeeAnn/ApplyingAssistant',
		images: [ApplyingAssistant2, ApplyingAssistant3, ApplyingAssistant4, ApplyingAssistant5, ApplyingAssistant6],
		tags: ['Browser Extension', 'Productivity Tool']
	},
	'townhall': {
		title: 'Townhall',
		subtitle: 'Full-Stack Community Platform',
		heroImage: AtriaFigma,
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
		heroImage: SpeedieFigma,
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
	'dinotype': {
		title: 'DinoType',
		subtitle: 'Type Racing Game',
		heroImage: DinoType,
		description: 'A type racer game built with Pygame and hosted on GitHub Pages using Pygbag. Players can test their typing speed in an interactive dinosaur-themed interface.',
		detailedDescription: `DinoType is a personal project to explore game development and Python programming. The game challenges players to type quickly and accurately while avoiding obstacles and competing against time.

Built with Pygame, the game was converted to run in web browsers using Pygbag, making it accessible to anyone with just a click—no installation required. This project helped me learn game development concepts including game loops, collision detection, animation, and state management, while also exploring how to deploy Python games to the web.`,
		techStack: ['Python', 'Pygame', 'Pygbag'],
		liveUrl: 'https://ryeeann.github.io/DinoType/',
		githubUrl: 'https://github.com/RYeeAnn/dinotype',
		images: [DinoType],
		tags: ['Game Development']
	},
	'shnake': {
		title: 'Shnake',
		subtitle: 'Classic Snake Game',
		heroImage: ShnakeGif,
		description: 'A classic snake game built with React to practice state management and game logic implementation.',
		detailedDescription: `A classic snake game inspired by the games I played as a kid. Created and coded using JavaScript and React.js, this was my first ever "game" I have coded.

The project helped me understand interactive state management, timing functions, collision detection, and how to handle user input in a real-time environment. It was a fun way to practice React while building something nostalgic and engaging.`,
		techStack: ['JavaScript', 'React', 'Sass'],
		liveUrl: 'https://shnakey.netlify.app/',
		githubUrl: 'https://github.com/RYeeAnn/Shnake',
		images: [ShnakeGif, Shnake1, Shnake2],
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
	},
	'ruby-hair-salon': {
		title: "Ruby's Hair Salon",
		subtitle: 'Freelance Project - Private Salon Website',
		heroImage: RHSFigma,
		description: 'A professional website built for my mother\'s private hair salon business, providing clients with a modern booking platform and showcasing her services.',
		detailedDescription: `My mother is a hairdresser and she's quite popular as her own boss. We renovated our basement to look like a professional salon where she serves clients by appointment. Previously, she managed all bookings manually in a notebook, requiring clients to call and have conversations to schedule appointments.

I built this website to modernize her business and create a professional online presence. Instead of just giving out a phone number, she can now share this application with potential clients, allowing them to learn about her services and book appointments online. It provides a polished, professional baseline for referrals while maintaining the intimate, private nature of her salon.

The website features an online booking system, service showcase, contact information, and a gallery of her work. This project was particularly meaningful as it directly solved a real-world problem for my family business and helped my mother streamline her client management process.`,
		techStack: ['React', 'TypeScript', 'Tailwind CSS'],
		liveUrl: 'https://www.rubyshairsalon.ca/',
		githubUrl: null,
		images: [RHS],
		tags: ['Freelance', 'Full Stack Development']
	},
	'solidry': {
		title: 'Solidry',
		subtitle: 'AI-Powered Code Review Assistant',
		heroImage: SolidryHero,
		description: 'An AI-powered code review assistant that automates quality analysis for SOLID and DRY principles, code hygiene, complexity issues, and dead code detection.',
		detailedDescription: `As a developer who rigorously applies SOLID and DRY principles in my professional workflow, I needed a fast, automated way to validate my code quality decisions and catch violations early. Manual code reviews for principle adherence are time-consuming, and I wanted instant feedback with transparency about accuracy. Not just "here's what's wrong" but "here's how confident you should be in this analysis."

Built to solve a personal workflow need, Solidry provides instant, transparent feedback for maintaining high code quality standards without manual review overhead. The app features dual-mode analysis (AI-powered via Claude Sonnet 4 or pattern-based demo mode), a unique confidence scoring system that provides transparency about result reliability, and line-by-line code annotations with severity levels.

The application includes real-time SOLID principle violation detection (SRP, OCP, LSP, ISP, DIP), code hygiene analysis (console.log, var usage, any types, TODOs), dead code detection, and complexity analysis. It features quality scoring (0-100) with letter grades (A-F), git diff support for PR reviews, and selective analysis options, all wrapped in a professional, tool-first design inspired by Cursor and Notion.

Key technical highlights include integration with Anthropic Claude SDK using Claude Sonnet 4, comprehensive testing with 33 passing unit tests (100% pass rate), and achieving Grade A (93/100) SOLID compliance in its own codebase. The project demonstrates production-ready error handling, full TypeScript type safety, and complete documentation including accuracy metrics and limitations.`,
		techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Anthropic Claude SDK', 'Node.js', 'Vitest', 'ESLint'],
		liveUrl: 'https://solidry.netlify.app',
		githubUrl: null,
		images: [SolidryHero],
		tags: ['Full Stack Development', 'AI/ML', 'Developer Tools']
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
					<div className="project-detail__hero-inner">
						<div className="project-detail__hero-content">
							<h1 className="project-detail__title">{project.title}</h1>
							<p className="project-detail__description">{project.description}</p>
							
							<div className="project-detail__links">
								{project.liveUrl && (
									<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-detail__link project-detail__link--primary">
										View Live
									</a>
								)}
								{project.chromeStoreUrl && (
									<a href={project.chromeStoreUrl} target="_blank" rel="noopener noreferrer" className="project-detail__link project-detail__link--primary">
										Install Extension
									</a>
								)}
								{project.githubUrl && (
									<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-detail__link project-detail__link--secondary">
										View Code
									</a>
								)}
							</div>
						</div>
						
						<div className="project-detail__hero-image">
							<img src={project.heroImage} alt={project.title} />
							{projectId === 'applying-assistant' && (
								<div className="project-detail__hero-video">
									<video 
										src={ApplyingAssistantVideo} 
										alt={`${project.title} demo`}
										controls
										autoPlay
										muted
										loop
									/>
								</div>
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