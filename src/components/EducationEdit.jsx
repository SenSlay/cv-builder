import { useState } from 'react'
import InputGroup from './InputGroup';

export default function EducationEdit({ list, showForm, mode, formIndex, handleShowForm, handleCloseForm, handleCancelForm, handleInputChange, handleNewInputChange, handleAddItem, handleDeleteItem, isExpanded, toggleExpand}) {
    const initialNewEducation = {
        school: '',
        degree: '',
        'start-date': '',
        'end-date': '',
    }
    const [newEducation, setNewEducation] = useState(initialNewEducation);
    
    return (
        <div className='education-input edit-section '>
            <div className="section-header" onClick={toggleExpand}>
              <h2>Education</h2>
              <button className="toggle-button">
                {isExpanded ? '▼' : '►'}
              </button>
            </div>

            {isExpanded && (
              <>
                {!showForm && (
                  <ul className='educations-container items-container'>
                    {list.map((education, index) => (
                        <li key={index}>
                            <p>{education.school}</p>
                            <div className='item-buttons'>
                                <button onClick={() => handleShowForm('edit', index)}><i className="fa-regular fa-pen-to-square"></i></button>
                                <button onClick={() => handleDeleteItem(index)}><i className="fa-solid fa-trash"></i></button>
                            </div>
                        </li> 
                    ))}
                  </ul>
                )}
                {showForm && (
                    <form name='education' className='section-form education-form' onSubmit={mode === 'edit' ? null : (e) => handleAddItem(e, newEducation, setNewEducation, initialNewEducation)}>
                        <InputGroup label='School' type='text' id='school' name='school' value={mode === 'edit' ? list[formIndex].school : newEducation.school} onChange={mode === 'edit' ? handleInputChange : (e) => handleNewInputChange(e, newEducation, setNewEducation)} required={'required'}></InputGroup>
                        <InputGroup label='Degree' type='text' id='degree' name='degree' value={mode === 'edit' ? list[formIndex].degree : newEducation.degree} onChange={mode === 'edit' ? handleInputChange : (e) => handleNewInputChange(e, newEducation, setNewEducation)}></InputGroup>
                        <div className='start-end-container'>
                            <InputGroup label='start-date' type='text' id='start-date' name='start-date' value={mode === 'edit' ? list[formIndex]['start-date'] : newEducation['start-date']} onChange={mode === 'edit' ? handleInputChange : (e) => handleNewInputChange(e, newEducation, setNewEducation)}></InputGroup>
                            <InputGroup label='end-date' type='text' id='end-date' name='end-date' value={mode === 'edit' ? list[formIndex]['end-date'] : newEducation['end-date']} onChange={mode === 'edit' ? handleInputChange : (e) => handleNewInputChange(e, newEducation, setNewEducation)}></InputGroup>
                        </div>
                        <div className='form-button-container'>
                            <button type='button' onClick={mode === 'edit' ? handleCancelForm : () => handleCloseForm('education')} className='form-cancel'>Cancel</button>
                            <button type='submit' onClick={mode === 'edit' ? () => handleCloseForm('education') : null} className='form-save'>{mode === 'edit' ? 'Save Changes' : 'Add Education'}</button>
                        </div>
                    </form>
                )}
                {!showForm && (
                    <button className='add-button' onClick={() => handleShowForm('add')}><i className="fa-solid fa-plus"></i>  Education</button>
                )}
              </>
            )}
        </div>
    )
}