import { useState } from 'react'
import InputGroup from './InputGroup';

export default function SkillsEdit({ list, showForm, mode, formIndex, handleShowForm, handleCloseForm, handleCancelForm, handleInputChange, handleNewInputChange, handleAddItem, handleDeleteItem, isExpanded, toggleExpand}) {
  const initialNewSkill = {
    category: '',
    skills: ''
  };
  const [newSkill, setNewSkill] = useState(initialNewSkill);

  return (
    <div className="skills-input edit-section">
      <div className="section-header" onClick={toggleExpand}>
        <h2>Skills</h2>
        <button className="toggle-button">
          {isExpanded ? '▼' : '►'}
        </button>
      </div>

      {isExpanded && (
        <>
          {!showForm && (
            <ul className='skills-container items-container'>
              {list.map((skill, index) => (
                  <li key={index}>
                      <p>{skill.category}</p>
                      <div className='item-buttons'>
                          <button onClick={() => handleShowForm('edit', index)}><i className="fa-regular fa-pen-to-square"></i></button>
                          <button onClick={() => handleDeleteItem(index)}><i className="fa-solid fa-trash"></i></button>
                      </div>
                  </li> 
              ))}
            </ul>
          )}
          {showForm && (
            <form name='skill' onSubmit={mode === 'edit' ? null : (e) => handleAddItem(e, newSkill, setNewSkill, initialNewSkill)} className='Skill-form section-form'>
                <InputGroup label='Category' type='text' id='skills' name='category' value={mode === 'edit' ? list[formIndex].category : newSkill.category} onChange={mode === 'edit' ? handleInputChange : (e) => handleNewInputChange(e, newSkill, setNewSkill)}></InputGroup>
                <InputGroup label='Skills' type='text' id='skills' name='skills' value={mode === 'edit' ? list[formIndex].skills : newSkill.skills} onChange={mode === 'edit' ? handleInputChange : (e) => handleNewInputChange(e, newSkill, setNewSkill)}></InputGroup>
                <div className='form-button-container'>
                    <button type='button' onClick={mode === 'edit' ? handleCancelForm : () => handleCloseForm('skill')} className='form-cancel'>Cancel</button>
                    <button type='submit' onClick={mode === 'edit' ? () => handleCloseForm('skill') : null} className='form-save'>{mode === 'edit' ? 'Save Changes' : 'Add Skill'}</button>
                </div>
            </form>
          )}
          {!showForm && (
              <button className='add-button' onClick={() => handleShowForm('add')}><i className="fa-solid fa-plus"></i>  Skill</button>
          )}
        </>
      )}
    </div>
  )
}