import { useState } from 'react'
import InputGroup from './InputGroup';

export default function ExperienceEdit({ list, showForm, mode, formIndex, handleShowForm, handleCloseForm, handleCancelForm, handleInputChange, handleNewInputChange, handleAddItem, handleDeleteItem }) {
    const initialNewExperience = {
        company: '',
        position: '',
        'start-date': '',
        'end-date': '',
        description: ''
    };
    const [newExperience, setNewExperience] = useState(initialNewExperience);

    return (
        <div className='experience-input edit-section'>
            <h2>Experience</h2>
            {!showForm && (
              <ul className='experience-container items-container'>
                {list.map((experience, index) => (
                    <li key={index}>
                        <p>{experience.company}</p>
                        <div className='item-buttons'>
                            <button onClick={() => handleShowForm('edit', index)}><i className="fa-regular fa-pen-to-square"></i></button>
                            <button onClick={() => handleDeleteItem(index)}><i className="fa-solid fa-trash"></i></button>
                        </div>
                    </li> 
                ))}
              </ul>
            )}
            {showForm && (
                <form name='experience' onSubmit={mode === 'edit' ? null : (e) => handleAddItem(e, newExperience, setNewExperience, initialNewExperience)} className='experience-form'>
                    <InputGroup label='Company' type='text' id='company' name='company' value={mode === 'edit' ? list[formIndex].company : newExperience.company} onChange={mode === 'edit' ? handleInputChange : (e) => handleNewInputChange(e, newExperience, setNewExperience)}></InputGroup>
                    <InputGroup label='Position' type='text' id='position' name='position' value={mode === 'edit' ? list[formIndex].position : newExperience.position} onChange={mode === 'edit' ? handleInputChange : (e) => handleNewInputChange(e, newExperience, setNewExperience)}></InputGroup>
                    <div className='start-end-container'>
                        <InputGroup label='start-date' type='text' id='start-date' name='start-date' value={mode === 'edit' ? list[formIndex]['start-date'] : newExperience['start-date']} onChange={mode === 'edit' ? handleInputChange : (e) => handleNewInputChange(e, newExperience, setNewExperience)}></InputGroup>
                        <InputGroup label='end-date' type='text' id='end-date' name='end-date' value={mode === 'edit' ? list[formIndex]['end-date'] : newExperience['end-date']} onChange={mode === 'edit' ? handleInputChange : (e) => handleNewInputChange(e, newExperience, setNewExperience)}></InputGroup>
                    </div>
                    <InputGroup label='Description' type='text' id='dsecription' name='description' value={mode === 'edit' ? list[formIndex].description : newExperience.description} onChange={mode === 'edit' ? handleInputChange : (e) => handleNewInputChange(e, newExperience, setNewExperience)}></InputGroup>
                    <div className='form-button-container'>
                        <button type='button' onClick={mode === 'edit' ? handleCancelForm : () => handleCloseForm('experience')} className='form-cancel'>Cancel</button>
                        <button type='submit' onClick={mode === 'edit' ? () => handleCloseForm('experience') : null} className='form-save'>{mode === 'edit' ? 'Save Changes' : 'Add Experience'}</button>
                    </div>
                </form>
            )}
            {!showForm && (
                <button className='add-button' onClick={() => handleShowForm('add')}><i className="fa-solid fa-plus"></i>  Experience</button>
            )}
        </div>
    )
} 