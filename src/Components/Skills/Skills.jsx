import React from 'react';
import './Skills.scss';

function Skills() {
  const categorizedSkills = {
    'Frontend': [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '⚡' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'HTML/CSS', icon: '🌐' },
      { name: 'Sass', icon: '💅' }
    ],
    'Backend': [
      { name: 'Python', icon: '🐍' },
      { name: 'Django', icon: '🎯' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express', icon: '🚂' },
      { name: 'REST APIs', icon: '🔌' },
      { name: 'WebSockets', icon: '🔌' }
    ],
    'Database & Tools': [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'Redis', icon: '🔴' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Git', icon: '📚' },
      { name: 'Docker', icon: '🐳' }
    ],
    'Cloud & Deployment': [
      { name: 'AWS', icon: '☁️' },
      { name: 'Netlify', icon: '🚀' },
      { name: 'Vercel', icon: '▲' },
      { name: 'Heroku', icon: '🟣' },
      { name: 'Render', icon: '🎨' }
    ]
  };

  return (
    <div className="skills" id="skills">
      <div className="skills__container">
        <h2 className="skills__title">Technical Skills</h2>
        
        <div className="skills__grid">
          {Object.entries(categorizedSkills).map(([category, items]) => (
            <div key={category} className="skills__category">
              <h3 className="skills__category-title">{category}</h3>
              <div className="skills__items">
                {items.map((skill) => (
                  <div className="skills__item" key={skill.name}>
                    <span className="skills__icon">{skill.icon}</span>
                    <span className="skills__name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
