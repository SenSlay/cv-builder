import { useState, useRef } from 'react'
import InputGroup from './InputGroup';

export default function ExperienceEdit({ experienceList, setExperienceList, showForm, setShowForm, handleCloseForm, handleAddExperience }) {
    const [mode, setMode] = useState(null);
    const [formIndex, setFormIndex] = useState(0);
    const [newExperience, setNewExperience] = useState({
      company: '',
      position: '',
      'start-date': '',
      'end-date': '',
      description: ''
    });
    const initialDataRef = useRef(null);

    // Handle show form
    const handleShowForm = (mode, index) => {
        if (mode === 'edit') {
            initialDataRef.current = { ...experienceList[index] };
            setFormIndex(index)
        }
        setMode(mode)
        setShowForm({
            ...showForm,
            'experience': true
        });
    };

    // Handle cancel form
    const handleCancelForm = () => {
        const list = [...experienceList]
        
        // Reverse the changes by re-assigning the initial value
        list[formIndex] = {
            ...initialDataRef.current
        }
        setExperienceList(list);
        setShowForm({
            ...showForm,
            'experience': false
        });
    }   

    // Handle existing input change
    const handleInputChange = (e) => {
        const updatedList = [...experienceList];
        updatedList[formIndex] = {
            ...updatedList[formIndex],
            [e.target.name]: e.target.value,
        };
        setExperienceList(updatedList);
    }

    // Handle new item input
    const handleNewInputChange = (e) => {
        const { name, value } = e.target;
    
        setNewExperience({
            ...newExperience,
            [name]: value,
        });
    }

    // Handle deleting an education item
    const handleDeleteEducation = (index) => {
        if (window.confirm("Are you sure you want to delete this experience?")) {
            const updatedExpereienceList = experienceList.filter((_, i) => i !== index);
            setExperienceList(updatedExpereienceList);
        }
    };
     
    return (
        <div className='experience-input edit-section'>
            <h2>Experience</h2>
            {!showForm.experience && (
              <ul className='experience-container'>
                {experienceList.map((experience, index) => (
                    <li key={index}>
                        <p>{experience.company}</p>
                        <div>
                            <button onClick={() => handleShowForm('edit', index)}><i className="fa-regular fa-pen-to-square"></i></button>
                            <button onClick={() => handleDeleteEducation(index)}><i className="fa-solid fa-trash"></i></button>
                        </div>
                    </li> 
                ))}
              </ul>
            )}
            {showForm.experience && (
                <form name='experience' onSubmit={mode === 'edit' ? null : (e) => handleAddExperience(e, experienceList, newExperience, setExperienceList)} className='experience-form'>
                    <InputGroup label='Company' type='text' id='company' name='company' value={mode === 'edit' ? experienceList[formIndex].company : newExperience.company} onChange={mode === 'edit' ? handleInputChange : handleNewInputChange}></InputGroup>
                    <InputGroup label='Position' type='text' id='position' name='position' value={mode === 'edit' ? experienceList[formIndex].position : newExperience.position} onChange={mode === 'edit' ? handleInputChange : handleNewInputChange}></InputGroup>
                    <div className='start-end-container'>
                        <InputGroup label='start-date' type='text' id='start-date' name='start-date' value={mode === 'edit' ? experienceList[formIndex]['start-date'] : newExperience['start-date']} onChange={mode === 'edit' ? handleInputChange : handleNewInputChange}></InputGroup>
                        <InputGroup label='end-date' type='text' id='end-date' name='end-date' value={mode === 'edit' ? experienceList[formIndex]['end-date'] : newExperience['end-date']} onChange={mode === 'edit' ? handleInputChange : handleNewInputChange}></InputGroup>
                    </div>
                    <InputGroup label='Description' type='text' id='dsecription' name='description' value={mode === 'edit' ? experienceList[formIndex].description : newExperience.description} onChange={mode === 'edit' ? handleInputChange : handleNewInputChange}></InputGroup>
                    <div className='form-button-container'>
                        <button type='button' onClick={mode === 'edit' ? handleCancelForm : () => handleCloseForm('experience')} className='form-cancel'>Cancel</button>
                        <button type='submit' onClick={mode === 'edit' ? () => handleCloseForm('experience') : null} className='form-save'>{mode === 'edit' ? 'Save Changes' : 'Add Experience'}</button>
                    </div>
                </form>
            )}
            {!showForm.experience && (
                <button className='add-button' onClick={() => handleShowForm('add')}><i className="fa-solid fa-plus"></i>  Experience</button>
            )}
        </div>
    )
} 