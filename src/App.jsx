import { useState } from 'react'
import './App.css'
import PersonalDetailsEdit from './components/PersonalDetailsEdit';
import EducationEdit from './components/EducationEdit';
import ExperienceEdit from './components/ExperienceEdit'; 
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
  
  const [educationList, setEducationList] = useState(initialEducation);
  const [showForm, setShowForm] = useState({
    education: false,
    experience: false
  });

  // Experience
  const exampleExperience = [
    {
      company: 'Daniel Lets make coffee',
      position: 'Customer Service Representative',
      'start-date': 'Oct 10',
      'end-date': 'Dec 10',
      description: 'Handled customer inquiries. Deez nuts, damn daniel, skibidi sigma.'
    },
    {
      company: 'Daniel Thanks For the coffee',
      position: 'Customer Service Representative',
      'start-date': 'Oct 23',
      'end-date': 'Dec 10',
      description: 'Handled customer inquiries. Deez nuts, damn daniel, skibidi sigma.'
    }
  ]

  // Handle closing the form
  const handleCloseForm = (form) => {
    setShowForm({
      ...showForm, 
      [form]: false,
    });
  };

  // Handle adding new item for given list
  const handleAddItem = (e, list, newItem, setList) => {
    e.preventDefault();

    setList([...list, newItem]);
    handleCloseForm(e.target.name);
  }

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
          educationList={educationList}
          setEducationList={setEducationList}
          showForm={showForm}
          setShowForm={setShowForm}
          handleCloseForm={handleCloseForm}
          handleAddEducation={handleAddItem}
        >  
        </EducationEdit>
        
        <ExperienceEdit
          experienceList={experienceList}
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
                <p>
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
                  <p><span>{experience['start-date']}</span> - <span>{experience['end-date']}</span></p>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </>
  )
}

export default App
