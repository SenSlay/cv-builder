import './App.css'
import SummaryEdit from './components/SummaryEdit';
import PersonalDetailsEdit from './components/PersonalDetailsEdit';
import EducationEdit from './components/EducationEdit';
import ExperienceEdit from './components/ExperienceEdit'; 
import ProjectsEdit from './components/ProjectsEdit';
import SkillsEdit from './components/SkillsEdit';
import useFormLogic from './utils/useFormLogic';
import { exampleSummary, examplePersonalDetails, exampleEducation, exampleExperience, exampleProject, exampleSkill } from './exampleCvData';
import { useRef} from "react";
import { useReactToPrint } from "react-to-print";
import CV from './components/CV';

function App() {
  const componentRef = useRef(null);
  
  const handlePrint = useReactToPrint({
    contentRef: componentRef, 
  });
  
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
        <div className='control-buttons'>
          <button>Clear Resume</button>
          <button onClick={() => {
            console.log("Print button clicked"); // Debug
            handlePrint();
          }}>Download CV</button>
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
      <CV
        ref={componentRef}
        personalDetails={personalDetails}
        summary={summary}
        educationList={educationList}
        experienceList={experienceList}
        projectList={projectList}
        skillList={skillList}
      />
    </>
  )
}

export default App
