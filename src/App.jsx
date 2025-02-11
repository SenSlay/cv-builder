import './App.css';
import SummaryEdit from './components/SummaryEdit';
import PersonalDetailsEdit from './components/PersonalDetailsEdit';
import EducationEdit from './components/EducationEdit';
import ExperienceEdit from './components/ExperienceEdit';
import ProjectsEdit from './components/ProjectsEdit';
import SkillsEdit from './components/SkillsEdit';
import useFormLogic from './utils/useFormLogic';
import {
  exampleSummary,
  examplePersonalDetails,
  exampleEducation,
  exampleExperience,
  exampleProject,
  exampleSkill,
  emptyDataCV,
} from './exampleCvData';
import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import CV from './components/CV';

function App() {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
  });

  // state for expand form
  const [isExpanded, setIsExpanded] = useState({
    personalDetails: true,
    summary: false,
    education: false,
    experience: false,
    projects: false,
    skills: false,
  });

  // Toggle expand form
  const toggleExpand = (section) => {
    setIsExpanded({ ...isExpanded, [section]: !isExpanded[section] });
  };

  const clearCV = () => {
    // Reset each section individually
    handlePDResetList(emptyDataCV.personalDetails); // Personal Details
    handleSummaryResetList(emptyDataCV.summary); // Summary
    handleEducationResetList(); // Education
    handleExperienceResetList(); // Experience
    handleProjectResetList(); // Projects
    handleSkillResetList(); // Skills
  };

  // Personal Details section state and functions
  const {
    list: personalDetails,
    handleInputChange: handlePDInputChange,
    resetList: handlePDResetList,
  } = useFormLogic(examplePersonalDetails);

  // Summary section state and functions
  const {
    list: summary,
    handleInputChange: handleSummaryInputChange,
    resetList: handleSummaryResetList,
  } = useFormLogic(exampleSummary);

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
    resetList: handleEducationResetList,
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
    resetList: handleExperienceResetList,
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
    resetList: handleProjectResetList,
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
    resetList: handleSkillResetList,
  } = useFormLogic(exampleSkill);

  return (
    <>
      <div className="edit-container">
        <div className="control-buttons">
          <button onClick={clearCV}>Clear CV</button>
          <button
            onClick={() => {
              handlePrint();
            }}
          >
            Download CV
          </button>
        </div>

        <PersonalDetailsEdit
          data={personalDetails}
          handleInputChange={handlePDInputChange}
          isExpanded={isExpanded.personalDetails}
          toggleExpand={() => toggleExpand('personalDetails')}
        ></PersonalDetailsEdit>

        <SummaryEdit
          data={summary}
          handleInputChange={handleSummaryInputChange}
          isExpanded={isExpanded.summary}
          toggleExpand={() => toggleExpand('summary')}
        ></SummaryEdit>

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
          isExpanded={isExpanded.education}
          toggleExpand={() => toggleExpand('education')}
        ></EducationEdit>

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
          isExpanded={isExpanded.experience}
          toggleExpand={() => toggleExpand('experience')}
        ></ExperienceEdit>

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
          isExpanded={isExpanded.projects}
          toggleExpand={() => toggleExpand('projects')}
        ></ProjectsEdit>

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
          isExpanded={isExpanded.skills}
          toggleExpand={() => toggleExpand('skills')}
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
  );
}

export default App;
