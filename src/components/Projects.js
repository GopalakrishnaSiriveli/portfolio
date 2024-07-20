import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-list">
        <div className="project">
          <h2>JOBBY APPLICATION</h2>
          <a href='https://as5jobbyapp.ccbp.tech/' target='_blank'>Clicke Me</a>
          <ul className='list'> 
            <p>username:rahul   password:rahul@2021</p>
                <li>Developed a comprehensive job search solution, Jobby App.
                </li>
                <li>	Designed pages for Login, Home, Jobs, and Job item details with React components and form inputs.</li>
                <li>	Secured user data with JWT tokens, REST API calls, and local storage.
                </li>
                <li>	Implemented protected routes and persisted login state with React Router and local storage.
                </li>
            </ul>
            <p>Technologies used: React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token,
Authorization, Authentication
</p>
        </div>
        <div className="project">
          <h2>IPL Dashboard</h2>
          <a href='http://gopalipl.ccbp.tech/' target='_blank'>Click Me</a>
          <ul className='list'> 
                <li>Built an interactive hub for IPL teams and matches information.  </li>
                <li>Navigated seamlessly with React Router, presenting team details and matches with REST API calls. </li>
                <li>Included a custom 404 page for non-existent routes.</li>
                
            </ul>
            <p>Technologies used: React JS, JavaScript, CSS, Bootstrap, Routing</p>
        </div>

        <div className="project">
          <h2>Post Manager Application</h2>
          <a href='https://wylotask.vercel.app/' target='_blank'>Click Me</a>
          <ul className='list'> 
                <li>Developed a post manager application to create,post,update and delete posts  </li>
                <li>Navigated seamlessly with React Router, presenting post details and posts with REST API calls. </li>
                <li>Included a custom 404 page for non-existent routes.</li>
                
            </ul>
            <p>Technologies used: React JS, JavaScript, CSS, Bootstrap, Routing</p>
        </div>
        
      </div>
    </div>
  );
}

export default Projects;
