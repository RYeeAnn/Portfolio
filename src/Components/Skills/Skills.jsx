import React from 'react';
import './Skills.scss';

import html from '../../assets/html.png';
import css from '../../assets/css.jpeg';
import sass from '../../assets/sass.jpeg';
import javascript from '../../assets/javascript.png';
import typescript from '../../assets/Typescript.png';
import python from '../../assets/python.png';
import csharp from '../../assets/csharp.png';

import react from '../../assets/react.png';
import node from '../../assets/node.png';
import express from '../../assets/express.png';
import django from '../../assets/django.png';
import flask from '../../assets/flask.png';
import dotnetcore from '../../assets/dotnetcore.png';

import postgresql from '../../assets/postgresql.png';
import mysql from '../../assets/mysql.png';
import mongodb from '../../assets/mongodb.png';

import git from '../../assets/git.png';
import aws from '../../assets/aws.png';

const categorizedSkills = {
  Languages: [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "SASS", icon: sass },
    { name: "JavaScript", icon: javascript },
    { name: "TypeScript", icon: typescript },
    { name: "Python", icon: python },
    { name: "C#", icon: csharp },
  ],
  Frameworks: [
    { name: "React", icon: react },
    { name: "Node.js", icon: node },
    { name: "Express.js", icon: express },
    { name: "Django", icon: django },
    { name: "Flask", icon: flask },
    { name: ".NET Core", icon: dotnetcore },
  ],
  Databases: [
    { name: "PostgreSQL", icon: postgresql },
    { name: "MySQL", icon: mysql },
    { name: "MongoDB", icon: mongodb },
  ],
  Tools: [
    { name: "Git", icon: git },
    { name: "AWS", icon: aws },
  ],
};

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills__container">
        <h2 className="skills__title">Skills</h2>

        {Object.entries(categorizedSkills).map(([category, items]) => (
          <div key={category} className="skills__section">
            <h3 className="skills__section-title">{category}</h3>
            <div className="skills__grid">
              {items.map((skill) => (
                <div className="skills__item" key={skill.name}>
                  <img src={skill.icon} alt={skill.name} />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
