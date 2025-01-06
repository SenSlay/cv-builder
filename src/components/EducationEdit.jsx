import { useState, useRef } from 'react'
import InputGroup from './InputGroup';

export default function EducationEdit({ educationList, setEducationList, showForm, setShowForm,handleCloseForm, handleAddEducation }) {
    const [mode, setMode] = useState(null);
    const [formIndex, setFormIndex] = useState(0);
    const initialDataRef = useRef(null);

    // Handle show form
    const handleShowForm = (mode, index) => {
        if (mode === 'edit') {
            initialDataRef.current = { ...educationList[index] };
            setFormIndex(index)
        }
        setMode(mode)
        setShowForm(true);
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
            {!showForm && (
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
            {showForm && (mode === 'edit' ? (
                <form className='education-form'>
                    <InputGroup label='School' type='text' id='school' name='school' value={educationList[formIndex].school} onChange={handleInputChange}></InputGroup>
                    <InputGroup label='Degree' type='text' id='degree' name='degree' value={educationList[formIndex].degree} onChange={handleInputChange}></InputGroup>
                    <div className='start-end-container'>
                        <InputGroup label='start-date' type='text' id='start-date' name='start-date' value={educationList[formIndex]['start-date']} onChange={handleInputChange}></InputGroup>
                        <InputGroup label='end-date' type='text' id='end-date' name='end-date' value={educationList[formIndex]['end-date']} onChange={handleInputChange}></InputGroup>
                    </div>
                    <div className='form-button-container'>
                        <button type='button' onClick={handleCancelForm} className='form-cancel'>Cancel</button>
                        <button type='submit' onClick={handleCloseForm} className='form-save'>Save Changes</button>
                    </div>
                </form>
            ) : (
                <form onSubmit={handleAddEducation} className='education-form'>
                    <InputGroup label='School' type='text' id='school' name='school' ></InputGroup>
                    <InputGroup label='Degree' type='text' id='degree' name='degree' ></InputGroup>
                    <div className='start-end-container'>
                        <InputGroup label='start-date' type='text' id='start-date' name='start-date' ></InputGroup>
                        <InputGroup label='end-date' type='text' id='end-date' name='end-date' ></InputGroup>
                    </div>
                    <div className='form-button-container'>
                        <button type='button' onClick={handleCloseForm} className='form-cancel'>Cancel</button>
                        <button type='submit' className='form-save'>Add Education</button>
                    </div>
                </form>
            ))}
            {!showForm && (
                <button onClick={() => handleShowForm('add')}>Add Education</button>
            )}
        </div>
    )
}