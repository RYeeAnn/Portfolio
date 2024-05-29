// Skills.jsx
import React from 'react';
import './Skills.scss';
import html from '../../assets/html.png';
import css from '../../assets/css.jpeg';
import sass from '../../assets/sass.jpeg';
import javascript from '../../assets/javascript.png';
import typescript from '../../assets/Typescript.png';
import python from '../../assets/python.png';
import flask from '../../assets/flask.png';
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import express from '../../assets/express.png';
import postgresql from '../../assets/postgresql.png';
import mysql from '../../assets/mysql.png';
import aws from '../../assets/aws.png';
import mongodb from '../../assets/mongodb.png';
import git from '../../assets/git.png';
import star from '../../assets/star.png';

function Skills() {
  return (
    <div className="skills">
      <div className="skills__container">
        <h2 className="skills__title" id="skills">Skills</h2>
        <div className="skills__grid">
          {/* Add your grid items here */}
          <div className="skills__item">
            <img src={html} alt="html" />
            {/* <img className="skills__proficiency-star" src={star} alt="proficiency" /> Add next to language if wanting star */}
            <p>HTML</p>
          </div>
          <div className="skills__item">
            <img src={css} alt="css" />
            <p>CSS</p>
          </div>
          <div className="skills__item">
            <img src={sass} alt="sass" />
            <p>SASS</p>
          </div>
          <div className="skills__item">
            <img src={javascript} alt="javascript" />
            <p>JavaScript</p>
          </div>
          <div className="skills__item">
            <img src={typescript} alt="typescript" />
            <p>TypeScript</p>
          </div>
          <div className="skills__item">
            <img src={python} alt="python" />
            <p>Python</p>
          </div>
          <div className="skills__item">
            <img src={flask} alt="flask" />
            <p>Flask</p>
          </div>
          <div className="skills__item">
            <img src={react} alt="react" />
            <p>React</p>
          </div>
          <div className="skills__item">
            <img src={node} alt="node" />
            <p>Node.js</p>
          </div>
          <div className="skills__item">
            <img src={express} alt="express" />
            <p>Express.js</p>
          </div>
          <div className="skills__item">
            <img src={postgresql} alt="postgresql" />
            <p>PostgreSQL</p>
          </div>
          <div className="skills__item">
            <img src={mysql} alt="mysql" />
            <p>MySQL</p>
          </div>
          <div className="skills__item">
            <img src={aws} alt="aws" />
            <p>AWS</p>
          </div>
          <div className="skills__item">
            <img src={mongodb} alt="mongodb" />
            <p>MongoDB</p>
          </div>
          <div className="skills__item">
            <img src={git} alt="git" />
            <p>Git</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
