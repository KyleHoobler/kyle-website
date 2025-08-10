import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState({});
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <header className="header animate-fade-in">
        <h1 className="glowing-text">Kyle Hoobler</h1>
        <h2 className="subtitle">Senior Software Engineer</h2>
        <div className="contact-info">
          <p>Yorktown, VA • (540) 316-8538 • thekhooplah@gmail.com</p>
          <p>
            <a href="https://www.linkedin.com/in/kyle-hoobler/">LinkedIn</a> •{' '}
            <a href="https://github.com/KyleHooblerOlo">GitHub – Work</a> •{' '}
            <a href="https://github.com/KyleHoobler">GitHub – Personal</a>
          </p>
        </div>
      </header>

      <section id="summary" className={`summary slide-in ${isVisible.summary ? 'visible' : ''}`}>
        <h2>Summary</h2>
        <div className="card">
          <p>Senior Software Engineer with 7+ years of experience building secure, scalable .NET and cloud-native systems for enterprise and government clients. Proven track record of delivering high-impact billing, logistics, and automation platforms in Agile environments. Adept at designing microservices, leading cross-functional projects, and mentoring developers. Core expertise in C#, .NET Core, React, AWS, and modern CI/CD pipelines.</p>
        </div>
      </section>

      <section id="skills" className={`skills slide-in ${isVisible.skills ? 'visible' : ''}`}>
        <h2>Technical Skills</h2>
        <div className="skills-grid hover-effect">
          <div className="skill-category">
            <h3>Fluent Languages</h3>
            <p>C#, Java, JavaScript, TypeScript, SQL, Apex</p>
          </div>
          <div className="skill-category">
            <h3>Languages With Some Experience</h3>
            <p>C++, Python, Go</p>
          </div>
          <div className="skill-category">
            <h3>Frameworks</h3>
            <p>NET Core/Framework, React, ASP.NET, Razor Pages, WPF</p>
          </div>
          <div className="skill-category">
            <h3>Cloud & DevOps</h3>
            <p>AWS (Lambda, EC2, S3), Azure DevOps, CI/CD, Git, GitHub, TeamCity, Octopus</p>
          </div>
          <div className="skill-category">
            <h3>Databases/CRMs</h3>
            <p>MSSQL, PostgreSQL, MySQL, Salesforce, Intacct</p>
          </div>
          <div className="skill-category">
            <h3>Configurations</h3>
            <p>Terraform, yaml, toml, json</p>
          </div>
        </div>
      </section>

      <section id="experience" className={`experience slide-in ${isVisible.experience ? 'visible' : ''}`}>
        <h2>Professional Experience</h2>
        
        <div className="job">
          <div className="job-header">
            <a href='https://www.linkedin.com/company/olo/'><h3>Olo Inc</h3></a>
            <p className="location">Remote</p>
          </div>
          <div className="job-title">
            <p>Senior Software Engineer</p>
            <p className="date">Oct 2024 to Present</p>
          </div>
          <div className="job-title">
            <p>Software Engineer II</p>
            <p className="date">May 2022 to Oct 2024</p>
          </div>
          <ul>
            <li>Developed microservices and RESTful APIs in .NET Core, deployed on scalable AWS infrastructure</li>
            <li>Built a performant TypeScript/React SPA using Vite and implemented an automated CI/CD pipeline</li>
            <li>Re-architected ownership transfer workflows, improving success rate from 80% to 100% and reducing support overhead</li>
            <li>Increased system resiliency with defensive programming and improved monitoring</li>
            <li>Mentored junior developers and led peer reviews to uphold quality and team growth</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <a href='https://www.linkedin.com/company/wearehii/'><h3>Huntington Ingalls Industries</h3></a>
            <p className="location">Newport News, VA</p>
          </div>
          <div className="job-title">
            <p>Software Engineer II</p>
            <p className="date">Sep 2020 to May 2022</p>
          </div>
          <div className="job-title">
            <p>Software Engineer I</p>
            <p className="date">Jul 2019 to Sep 2020</p>
          </div>
          <div className="job-title">
            <p>Computer Support Intern</p>
            <p className="date">Jul 2018 to Jul 2019</p>
          </div>
          <ul>
            <li>Designed and maintained .NET/SQL applications for naval logistics</li>
            <li>Modernized legacy systems to improve performance and user experience</li>
            <li>Led implementation of CI/CD pipelines using Azure DevOps</li>
            <li>Delivered software meeting stringent cybersecurity requirements</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <a href='https://www.linkedin.com/company/jefferson-lab/'><h3>Jefferson Lab</h3></a>
            <p className="location">Newport News, VA</p>
          </div>
          <div className="job-title">
            <p>IT Help Desk Technician (Intern)</p>
            <p className="date">Jun 2017 to Jun 2018</p>
          </div>
          <ul>
            <li>Provided technical support for multiple operating systems</li>
            <li>Authored technical documentation and internal guides</li>
            <li>Gained hands-on experience in cross-platform administration</li>
          </ul>
        </div>
      </section>

      <section id="education" className={`education slide-in ${isVisible.education ? 'visible' : ''}`}>
        <h2>Education</h2>
        <div className="education-item">
          <h3>Bachelor of Science in Computer Science</h3>
          <p>Christopher Newport University, Newport News, VA</p>
          <p className="date">June 2019</p>
          <p>Minor: Information Systems</p>
          <p>Relevant Coursework: Algorithms, Java, C++, Object-Oriented Programming, Android Development</p>
        </div>
      </section>
    </div>
  );
}

export default App;
