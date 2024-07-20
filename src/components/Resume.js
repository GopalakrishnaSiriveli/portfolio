import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <a href='https://drive.google.com/file/d/1EegvRgmaY_h14ggS98KFJKr0pziFAvPh/view?usp=sharing' target='_blank'>Download Resume</a>
      <div><h3>EDUCATION</h3>
        <ul className='list'>
        <li>Industry Ready Course Certification in Full Stack Web Development from Nxtwave Disruptive Technologies</li>
        <li>Bachelor of Technology in Mechanical Engineering with 9.1/10 CGPA from Madanapalle Institute of Technology and Science from 2016 to 2019</li>
        <li>Diploma in Mechanical Engineering with 8.9/10 CGPA from Madanapalle Institute of Technology and Science from 2013 to 2016</li>
        </ul></div>

        <div><h3>SKILLSET</h3><ul className='list'>
        <li>Frontend: HTML, CSS, Bootstrap, JavaScript, React.js</li>
        <li>Backend: Python, Express, Node.js
        </li>
        <li>Databases: SQLite</li>
        </ul></div>
        <div>
            <h3>Project</h3>
            <h4><a href='https://geetha-yoky.vercel.app/' target="_blank">Todos Application</a></h4>
            
            <ul className='list'> 
                <li>A comprehensive todo management tool designed to enhance productivity.</li>
                <li>	Designed pages for Login, Home, Register, and Task item details with React components.</li>
                <li>	Secured user data with JWT tokens, REST API calls, and Server with database.</li>
                <li>	Implemented protected routes and persisted login state with React Router.</li>
            </ul>
            <p>
Technologies used: React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Database, JWT Token, Authorization, Authentication,Server
</p>
        </div>
    </div>
  );
}

export default Resume;
