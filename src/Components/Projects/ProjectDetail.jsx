import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetail.scss';
import DinoType from '../../assets/DynoType.png';
import Speedie from '../../assets/speedie.png';
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
import SpeedieFigma from '../../assets/Speedie-Figma.png';
import TownhallHero from '../../assets/Townhall.png';
import Townhall2 from '../../assets/Townhall2.png';
import Townhall3 from '../../assets/Townhall3.png';
import Townhall4 from '../../assets/Townhall4.png';
import Townhall5 from '../../assets/Townhall5.png';

// Simplified project data
const projectData = {
	'townhall': {
		title: 'Townhall',
		subtitle: 'Full-Stack Community Platform',
		heroImage: TownhallHero,
		description: 'A full-stack community platform I\'m actively contributing to, built for volunteer collaboration with real-time communication and media support.',
		detailedDescription: `Townhall is a community platform designed to connect volunteers with local initiatives. It was built in collaboration with the Vancouver Food Justice Coalition (VFJC), whose members use the platform to coordinate volunteer efforts and community engagement. I joined the project as a core contributor and took ownership across both the frontend and backend.

I built 15+ RESTful endpoints covering user management, posts, comments, and media uploads. I also implemented real-time notifications using Django Channels and WebSockets, and integrated Cloudinary for media handling. On the frontend, I translated Figma designs into responsive React components.

The backend follows a layered architecture, with serializers, services, and views kept separate, which made the codebase easier to extend as the feature set grew. This project is still actively in development and I continue to contribute new features and bug fixes.`,
		techStack: ['Python', 'Django', 'Django Channels', 'React', 'Next.js', 'PostgreSQL', 'WebSockets', 'Redis', 'Cloudinary', 'Netlify', 'Render'],
		liveUrl: 'https://atriacoop.netlify.app/',
		githubUrl: 'https://github.com/AtriaCoop/townhallfrontend',
		githubBackendUrl: 'https://github.com/AtriaCoop/new-townhall-backend',
		images: [TownhallHero, Townhall2, Townhall3, Townhall4, Townhall5],
		tags: ['Full Stack Development', 'Team Project']
	},
	'applying-assistant': {
		title: 'Applying Assistant',
		subtitle: 'Chrome Extension for Job Applications',
		heroImage: ApplyingAssistantFigma,
		description: 'A Chrome extension that auto-fills job application forms with one-click templates, cutting application time from 20+ minutes to under 5.',
		detailedDescription: `While job searching, I found myself rewriting the same answers to questions like "Where do you see yourself in 5 years?" across dozens of applications. I built this extension to solve that problem for myself.

The extension detects form fields on job application pages and offers pre-written templates with one click. The trickiest part was making field detection work reliably across different job sites. Each platform structures their HTML differently, so I had to write flexible selectors that could adapt without breaking.

It's published on the Chrome Web Store and actively used. Building it taught me a lot about content script injection, the Chrome Extensions lifecycle, and DOM manipulation across third-party pages.`,
		techStack: ['JavaScript', 'Chrome Extensions API', 'HTML', 'CSS'],
		liveUrl: `https://applyingassistant.netlify.app/`,
		chromeStoreUrl: 'https://chromewebstore.google.com/detail/applying-assistant/jemddgjafimcndlkmbjkpimnedbmccee',
		githubUrl: 'https://github.com/RYeeAnn/ApplyingAssistant',
		images: [ApplyingAssistant2, ApplyingAssistant3, ApplyingAssistant4, ApplyingAssistant5, ApplyingAssistant6],
		tags: ['Browser Extension', 'Productivity Tool']
	},
	'speedie': {
		title: 'Speedie',
		subtitle: 'Car Care Companion App',
		heroImage: SpeedieFigma,
		description: 'An app designed to help everyday drivers understand their car better with interactive dashboard that explains vehicle warning lights, urgency levels, and repair advice.',
		detailedDescription: `Speedie helps everyday drivers understand their car's warning lights without having to Google everything. You tap a warning light, get a plain-English explanation of what it means, how urgent it is, and what to do next.

I designed and built the whole thing myself, from Figma mockups to the finished app. The trickiest part was organizing the information in a way that didn't overwhelm someone who just saw their check engine light turn on for the first time. The app also has a radial menu I built as a starting point for future features like a service scheduler and mileage tracker.`,
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
		detailedDescription: `DinoType is a typing speed game built with Python and Pygame, compiled to WebAssembly with Pygbag so it runs directly in the browser with no install needed. Players race through typing prompts while a dinosaur animates on screen, with difficulty scaling as speed increases.

I built the full game loop, collision detection, animation, and state management in Python, then figured out the Pygbag build pipeline to get it running on GitHub Pages. It was my first time deploying a Python application to the web without a server.`,
		techStack: ['Python', 'Pygame', 'Pygbag'],
		liveUrl: 'https://ryeeann.github.io/DinoType/',
		githubUrl: 'https://github.com/RYeeAnn/dinotype',
		images: [DinoType],
		tags: ['Game Development']
	},
	'ruby-hair-salon': {
		title: "Ruby's Hair Salon",
		subtitle: 'Freelance Project - Private Salon Website',
		heroImage: RHSFigma,
		description: 'A professional website built for my mother\'s private hair salon business, providing clients with a modern booking platform and showcasing her services.',
		detailedDescription: `My mother is a hairdresser and she's quite popular as her own boss. We renovated our basement to look like a professional salon where she serves clients by appointment. Previously, she managed all bookings manually in a notebook, requiring clients to call and have conversations to schedule appointments.

I built this website to modernize her business and create a professional online presence. Instead of just giving out a phone number, she can now share this application with potential clients, allowing them to learn about her services and book appointments online. It provides a polished, professional baseline for referrals while maintaining the intimate, private nature of her salon.

The website features an online booking system, service showcase, contact information, and a gallery of her work.`,
		techStack: ['React', 'TypeScript', 'Tailwind CSS'],
		liveUrl: 'https://www.rubyshairsalon.ca/',
		githubUrl: null,
		images: [RHS],
		tags: ['Freelance', 'Front-End Development']
	},
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
										{project.githubBackendUrl ? "Frontend Repo" : "View Code"}
									</a>
								)}
								{project.githubBackendUrl && (
									<a href={project.githubBackendUrl} target="_blank" rel="noopener noreferrer" className="project-detail__link project-detail__link--secondary">
										Backend Repo
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