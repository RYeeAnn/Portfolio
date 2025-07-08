import React from 'react';
import './Skills.scss';

import html from '../../assets/html.png';
import css from '../../assets/css.jpeg';
import javascript from '../../assets/javascript.png';
import typescript from '../../assets/Typescript.png';
import python from '../../assets/python.png';
import unity from '../../assets/unity.png';
import csharp from '../../assets/csharp.png';

import react from '../../assets/react.png';
import nextjs from '../../assets/nextjs.png';
import node from '../../assets/node.png';
import express from '../../assets/express.png';
import django from '../../assets/django.png';
import dotnetcore from '../../assets/dotnetcore.png';

import postgresql from '../../assets/postgresql.png';
import mysql from '../../assets/mysql.png';
import sqlite from '../../assets/sqlite.png'
import redis from '../../assets/redis.png';

import git from '../../assets/git.png';
import postman from '../../assets/postman.png';
import figma from '../../assets/figma.png';
import render from '../../assets/render.png';
import netlify from '../../assets/netlify.png';
import vercel from '../../assets/vercel.png';

import restapis from '../../assets/restapis.png';
import websockets from '../../assets/websockets.svg';
import cloudinary from '../../assets/cloudinary.png';

const categorizedSkills = {
  Languages: [
    { name: "Python", icon: python },
    { name: "JavaScript", icon: javascript },
    { name: "TypeScript", icon: typescript },
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "Unity", icon: unity },
    { name: "C#", icon: csharp },
  ],
  Frameworks: [
    { name: "React", icon: react },
    { name: "Next.js", icon: nextjs },
    { name: "Django", icon: django },
    { name: "Node.js", icon: node },
    { name: "Express.js", icon: express },
    { name: ".NET Core", icon: dotnetcore },
  ],
  Databases: [
    { name: "PostgreSQL", icon: postgresql },
    { name: "SQLite", icon: sqlite },
    { name: "MySQL", icon: mysql },
    { name: "Redis", icon: redis },
  ],
  Tools: [
    { name: "Git", icon: git },
    { name: "Postman", icon: postman },
    { name: "Figma", icon: figma },
    { name: "Render", icon: render },
    { name: "Netlify", icon: netlify },
    { name: "Vercel", icon: vercel },
  ],
  Technologies: [
    { name: "REST APIs", icon: restapis },
    { name: "Websockets", icon: websockets },
    { name: "Cloudinary", icon: cloudinary },
  ]
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
