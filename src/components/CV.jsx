import React from "react";

const CV = React.forwardRef((props, ref) => {
  const {
    personalDetails,
    summary,
    educationList,
    experienceList,
    projectList,
    skillList,
  } = props;

  return (
    <div ref={ref} className="cv-container">
      <div className="cv-header">
        <h1>{personalDetails.fullName}</h1>
        <div className="contact-info">
          <div>
            <i className="fa-solid fa-envelope"></i>
            <p>{personalDetails.email}</p>
          </div>
          <div>
            <i className="fa-solid fa-phone"></i>
            <p>{personalDetails.phoneNumber}</p>
          </div>
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <p>{personalDetails.address}</p>
          </div>
        </div>
      </div>
      <div className="summary-info cv-section">
        <h2>Summary</h2>
        <p>{summary.description}</p>
      </div>
      <div className="education-info cv-section">
        <h2>Education</h2>
        <ul>
          {educationList.map((education, index) => (
            <li key={index}>
              <div>
                <h3>{education.school}</h3>
                <p>{education.degree}</p>
              </div>
              <p className="date-container">
                {education["start-date"]} - {education["end-date"]}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="experience-info cv-section">
        <h2>Experience</h2>
        <ul>
          {experienceList.map((experience, index) => (
            <li key={index}>
              <div>
                <h3>{experience.company}</h3>
                <h4>{experience.position}</h4>
                <p>{experience.description}</p>
              </div>
              <p className="date-container">
                {experience["start-date"]} - {experience["end-date"]}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="projects-info cv-section">
        <h2>Projects</h2>
        <ul>
          {projectList.map((project, index) => (
            <li key={index}>
              <div>
                <div>
                  <h3>{project.name}</h3>
                  <p>| {project.tools}</p>
                </div>
                <p>{project.description}</p>
              </div>
              <p className="date-container">
                {project["start-date"]} - {project["end-date"]}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="skills-info cv-section">
        <h2>Skills</h2>
        <ul>
          {skillList.map((skill, index) => (
            <li key={index}>
              <div>
                {skill.category && (
                  <p className="category-data">{skill.category}:</p>
                )}
                <p>{skill.skills}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

CV.displayName = "CV";

export default CV;