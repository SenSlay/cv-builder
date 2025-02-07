import { useState } from 'react'
import './App.css'
import PersonalDetailsEdit from './components/PersonalDetailsEdit';
import EducationEdit from './components/EducationEdit';
import ExperienceEdit from './components/ExperienceEdit'; 
import ProjectsEdit from './components/ProjectsEdit';
import useFormLogic from './utils/useFormLogic';

function App() {
  const [formData, setFormData] = useState({
    fullName: 'Irvan Castro',
    email: 'email@gmail.com',
    phoneNumber: '+63 123 456 7890',
    address: 'Dubai, UAE',
  });
 
  // Handle personal info input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Education
  const initialEducation = [
    { 
      school: 'Mapua University',
      degree: 'Bachelor of Science in Computer Science',
      'start-date': 'Aug, 2023',
      'end-date': 'Present',
    }
  ]

  // Example experience data
  const exampleExperience = [
    {
      company: 'Web Developer Intern',
      position: 'Company',
      'start-date': 'Oct 23',
      'end-date': 'Dec 10',
      description: 'Created front-end components using React.'
    },
    {
      company: 'ProbeCX Ph',
      position: 'Customer Service Representative',
      'start-date': 'Oct 10',
      'end-date': 'Dec 10',
      description: 'Handled customer inquiries. Deez nuts, damn daniel, skibidi sigma.'
    },
  ]

  // Example projects data 
  const exampleProject = [
    {
      name: 'CV Builder',
      tools: 'React, Javascript, HTML, CSS',
      'start-date': 'Jan 1',
      'end-date': 'Present',
      description: 'Created using React'
    }
  ]

  // Education section state and functions
  const {
    list: educationList,
    showForm: educationShowForm,
    mode: educationMode,
    formIndex: educationFormIndex,
    handleShowForm: handleEducationShowForm,
    handleCloseForm: handleEducationCloseForm,
    handleCancelForm: handleEducationCancelForm,
    handleInputChange: handleEducationInputChange,
    handleNewInputChange: handleEducationNewInputChange,
    handleAddItem: handleAddEducation,
    handleDeleteItem: handleEducationDeleteItem,
  } = useFormLogic(initialEducation);

  // Experience section state and functions
  const {
    list: experienceList,
    showForm: experienceShowForm,
    mode: experienceMode,
    formIndex: experienceFormIndex,
    handleShowForm: handleExperienceShowForm,
    handleCloseForm: handleExperienceCloseForm,
    handleCancelForm: handleExperienceCancelForm,
    handleInputChange: handleExperienceInputChange,
    handleNewInputChange: handleExperienceNewInputChange,
    handleAddItem: handleAddExperience,
    handleDeleteItem: handleExperienceDeleteItem,
  } = useFormLogic(exampleExperience);

  // Projects section state and functions
  const {
    list: projectList,
    showForm: projectShowForm,
    mode: projectMode,
    formIndex: projectFormIndex,
    handleShowForm: handleProjectShowForm,
    handleCloseForm: handleProjectCloseForm,
    handleCancelForm: handleProjectCancelForm,
    handleInputChange: handleProjectInputChange,
    handleNewInputChange: handleProjectNewInputChange,
    handleAddItem: handleAddProject,
    handleDeleteItem: handleProjectDeleteItem,
  } = useFormLogic(exampleProject);
 
  return (
    <>
      <div className='edit-container'>
        <div>
          <button>Clear Resume</button>
          <button>Load Example</button>
        </div>

        <PersonalDetailsEdit
          formData={formData}
          handleInputChange={handleInputChange}
        >  
        </PersonalDetailsEdit>

        <EducationEdit
          list={educationList}
          showForm={educationShowForm}
          mode={educationMode}
          formIndex={educationFormIndex}
          handleShowForm={handleEducationShowForm}
          handleCloseForm={handleEducationCloseForm}
          handleCancelForm={handleEducationCancelForm}
          handleInputChange={handleEducationInputChange}
          handleNewInputChange={handleEducationNewInputChange}
          handleAddItem={handleAddEducation}
          handleDeleteItem={handleEducationDeleteItem}
        >  
        </EducationEdit>
        
        <ExperienceEdit
          list={experienceList}
          showForm={experienceShowForm}
          mode={experienceMode}
          formIndex={experienceFormIndex}
          handleShowForm={handleExperienceShowForm}
          handleCloseForm={handleExperienceCloseForm}
          handleCancelForm={handleExperienceCancelForm}
          handleInputChange={handleExperienceInputChange}
          handleNewInputChange={handleExperienceNewInputChange}
          handleAddItem={handleAddExperience}
          handleDeleteItem={handleExperienceDeleteItem}
        >
        </ExperienceEdit>

        <ProjectsEdit
          list={projectList}
          showForm={projectShowForm}
          mode={projectMode}
          formIndex={projectFormIndex}
          handleShowForm={handleProjectShowForm}
          handleCloseForm={handleProjectCloseForm}
          handleCancelForm={handleProjectCancelForm}
          handleInputChange={handleProjectInputChange}
          handleNewInputChange={handleProjectNewInputChange}
          handleAddItem={handleAddProject}
          handleDeleteItem={handleProjectDeleteItem}
        >
        </ProjectsEdit>
      </div>
      <div className='cv-container'>
        <div className='cv-header'>
          <h1>{formData.fullName}</h1>
          <div className='contact-info'>
            <div>
              <i className="fa-solid fa-envelope"></i>
              <p>{formData.email}</p>
            </div>
            <div>
              <i className="fa-solid fa-phone"></i>
              <p>{formData.phoneNumber}</p>
            </div>
            <div>
              <i className="fa-solid fa-location-dot"></i>
              <p>{formData.address}</p>
            </div>
          </div>
        </div>
        <div className='education-info cv-section'>
          <h2>Education</h2>
          <ul>
            {educationList.map((education, index) => (
              <li key={index}>
                <div>
                  <h3>{education.school}</h3>
                  <p>{education.degree}</p>
                </div>
                <p className='date-container'>
                    {education['start-date']} - {education['end-date']}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className='experience-info cv-section'>
            <h2>Experience</h2>
            <ul>
              {experienceList.map((experience, index) => (
                <li key={index}>
                  <div>
                    <h3>{experience.company}</h3>
                    <h4>{experience.position}</h4>
                    <p>{experience.description}</p>
                  </div>
                  <p className='date-container'>{experience['start-date']} - {experience['end-date']}</p>
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
                <p className='date-container'>{project['start-date']} - {project['end-date']}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
