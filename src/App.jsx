import './App.css'
import SummaryEdit from './components/SummaryEdit';
import PersonalDetailsEdit from './components/PersonalDetailsEdit';
import EducationEdit from './components/EducationEdit';
import ExperienceEdit from './components/ExperienceEdit'; 
import ProjectsEdit from './components/ProjectsEdit';
import SkillsEdit from './components/SkillsEdit';
import useFormLogic from './utils/useFormLogic';
import { exampleSummary, examplePersonalDetails, exampleEducation, exampleExperience, exampleProject, exampleSkill } from './exampleCvData';

function App() {

  // Summary section state and functions
  const {
    list: summary,
    handleInputChange: handleSummaryInputChange,
  } = useFormLogic(exampleSummary);

  // Personal Details section state and functions
  const {
    list: personalDetails,
    handleInputChange: handlePDInputChange,
  } = useFormLogic(examplePersonalDetails)

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
  } = useFormLogic(exampleEducation);

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

  // Skills section state and functions
  const {
    list: skillList,
    showForm: skillShowForm,
    mode: skillMode,
    formIndex: skillFormIndex,
    handleShowForm: handleSkillShowForm,
    handleCloseForm: handleSkillCloseForm,
    handleCancelForm: handleSkillCancelForm,
    handleInputChange: handleSkillInputChange,
    handleNewInputChange: handleSkillNewInputChange,
    handleAddItem: handleAddSkill,
    handleDeleteItem: handleSkillDeleteItem,
  } = useFormLogic(exampleSkill);
 
  return (
    <>
      <div className='edit-container'>
        <div>
          <button>Clear Resume</button>
          <button>Load Example</button>
        </div>

        <SummaryEdit
          data={summary}
          handleInputChange={handleSummaryInputChange}
        >
        </SummaryEdit>

        <PersonalDetailsEdit
          data = {personalDetails}
          handleInputChange={handlePDInputChange}
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

        <SkillsEdit
          list={skillList}
          showForm={skillShowForm}
          mode={skillMode}
          formIndex={skillFormIndex}
          handleShowForm={handleSkillShowForm}
          handleCloseForm={handleSkillCloseForm}
          handleCancelForm={handleSkillCancelForm}
          handleInputChange={handleSkillInputChange}
          handleNewInputChange={handleSkillNewInputChange}
          handleAddItem={handleAddSkill}
          handleDeleteItem={handleSkillDeleteItem}
        ></SkillsEdit>
      </div>
      <div className='cv-container'>
        <div className='cv-header'>
          <h1>{personalDetails.fullName}</h1>
          <div className='contact-info'>
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
        <div className='summary-info cv-section'>
          <h2>Summary</h2>
          <p>{summary.description}</p>
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
        <div className="skills-info cv-section">
          <h2>Skills</h2>
          <ul>
            {skillList.map((skill, index) => (
              <li key={index}>
                <div>
                  {skill.category && <p className='category-data'>{skill.category}:</p>}
                  <p>{skill.skills}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
