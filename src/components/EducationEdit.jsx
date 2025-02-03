import { useState, useRef } from 'react'
import InputGroup from './InputGroup';

export default function EducationEdit({ educationList, setEducationList, showForm, setShowForm, handleCloseForm, handleAddEducation }) {
    const [mode, setMode] = useState(null);
    const [formIndex, setFormIndex] = useState(0);
    const [newEducation, setNewEducation] = useState({
        school: '',
        degree: '',
        'start-date': '',
        'end-date': '',
    });
    const initialDataRef = useRef(null);

    // Handle show form
    const handleShowForm = (mode, index) => {
        if (mode === 'edit') {
            initialDataRef.current = { ...educationList[index] };
            setFormIndex(index)
        }
        setMode(mode)
        setShowForm({
            ...showForm,
            'education': true
        });
    };

    // Handle cancel form
    const handleCancelForm = () => {
        const list = [...educationList]
        
        // Reverse the changes by re-assigning the initial value
        list[formIndex] = {
            ...initialDataRef.current
        }
        setEducationList(list);
        setShowForm(false)
    }   

    // Handle input change
    const handleInputChange = (e) => {
        const updatedList = [...educationList];
        updatedList[formIndex] = {
            ...updatedList[formIndex],
            [e.target.name]: e.target.value,
        };
        setEducationList(updatedList);
    }

    // Handle new item input
    const handleNewInputChange = (e) => {
        const { name, value } = e.target;
    
        setNewEducation({
            ...newEducation,
            [name]: value,
        });
    }

    // Handle deleting an education item
    const handleDeleteEducation = (index) => {
        if (window.confirm("Are you sure you want to delete this education?")) {
            const updatedEducationList = educationList.filter((_, i) => i !== index);
            setEducationList(updatedEducationList);
        }
    };
    
    return (
        <div className='education-input edit-section '>
            <h2>Education</h2>
            {!showForm.education && (
              <ul className='educations-container'>
                {educationList.map((education, index) => (
                    <li key={index}>
                        <p>{education.school}</p>
                        <div>
                            <button onClick={() => handleShowForm('edit', index)}><i className="fa-regular fa-pen-to-square"></i></button>
                            <button onClick={() => handleDeleteEducation(index)}><i className="fa-solid fa-trash"></i></button>
                        </div>
                    </li> 
                ))}
              </ul>
            )}
            {showForm.education && (
                <form name='education' className='education-form' onSubmit={mode === 'edit' ? null : (e) => handleAddEducation(e, educationList, newEducation, setEducationList)}>
                    <InputGroup label='School' type='text' id='school' name='school' value={mode === 'edit' ? educationList[formIndex].school : newEducation.school} onChange={mode === 'edit' ? handleInputChange : handleNewInputChange} required={'required'}></InputGroup>
                    <InputGroup label='Degree' type='text' id='degree' name='degree' value={mode === 'edit' ? educationList[formIndex].degree : newEducation.degree} onChange={mode === 'edit' ? handleInputChange : handleNewInputChange}></InputGroup>
                    <div className='start-end-container'>
                        <InputGroup label='start-date' type='text' id='start-date' name='start-date' value={mode === 'edit' ? educationList[formIndex]['start-date'] : newEducation['start-date']} onChange={mode === 'edit' ? handleInputChange : handleNewInputChange}></InputGroup>
                        <InputGroup label='end-date' type='text' id='end-date' name='end-date' value={mode === 'edit' ? educationList[formIndex]['end-date'] : newEducation['end-date']} onChange={mode === 'edit' ? handleInputChange : handleNewInputChange}></InputGroup>
                    </div>
                    <div className='form-button-container'>
                        <button type='button' onClick={mode === 'edit' ? handleCancelForm : () => handleCloseForm('education')} className='form-cancel'>Cancel</button>
                        <button type='submit' onClick={mode === 'edit' ? () => handleCloseForm('education') : null} className='form-save'>{mode === 'edit' ? 'Save Changes' : 'Add Education'}</button>
                    </div>
                </form>
            )}
            {!showForm.education && (
                <button className='add-button' onClick={() => handleShowForm('add')}><i className="fa-solid fa-plus"></i>  Education</button>
            )}
        </div>
    )
}