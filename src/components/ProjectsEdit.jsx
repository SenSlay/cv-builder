import { useState } from 'react'
import InputGroup from './InputGroup';

export default function ProjectsEdit({ list, showForm, mode, formIndex, handleShowForm, handleCloseForm, handleCancelForm, handleInputChange, handleNewInputChange, handleAddItem, handleDeleteItem, isExpanded, toggleExpand}) {
  const initialNewProject = {
    name: '',
    tools: '',
    'start-date': '',
    'end-date': '',
    description: ''
  };
  const [newProject, setNewProject] = useState(initialNewProject);

  return (
    <div className="projects-input edit-section">
        <div className="section-header" onClick={toggleExpand}>
              <h2>Projects</h2>
              <button className="toggle-button">
                {isExpanded ? '▼' : '►'}
              </button>
            </div>

        {isExpanded && (
          <>
        {!showForm && (
              <ul className='projects-container items-container'>
                {list.map((project, index) => (
                    <li key={index}>
                        <p>{project.name}</p>
                        <div className='item-buttons'>
                            <button onClick={() => handleShowForm('edit', index)}><i className="fa-regular fa-pen-to-square"></i></button>
                            <button onClick={() => handleDeleteItem(index)}><i className="fa-solid fa-trash"></i></button>
                        </div>
                    </li> 
                ))}
              </ul>
            )}
            {showForm && (
                <form name='project' onSubmit={mode === 'edit' ? null : (e) => handleAddItem(e, newProject, setNewProject, initialNewProject)} className='project-form section-form'>
                    <InputGroup label='Name' type='text' id='name' name='name' value={mode === 'edit' ? list[formIndex].name : newProject.name} onChange={mode === 'edit' ? handleInputChange : (e) => handleNewInputChange(e, newProject, setNewProject)}></InputGroup>
                    <InputGroup label='Tools' type='text' id='tools' name='tools' value={mode === 'edit' ? list[formIndex].tools : newProject.tools} onChange={mode === 'edit' ? handleInputChange : (e) => handleNewInputChange(e, newProject, setNewProject)}></InputGroup>
                    <div className='start-end-container'>
                        <InputGroup label='start-date' type='text' id='start-date' name='start-date' value={mode === 'edit' ? list[formIndex]['start-date'] : newProject['start-date']} onChange={mode === 'edit' ? handleInputChange : (e) => handleNewInputChange(e, newProject, setNewProject)}></InputGroup>
                        <InputGroup label='end-date' type='text' id='end-date' name='end-date' value={mode === 'edit' ? list[formIndex]['end-date'] : newProject['end-date']} onChange={mode === 'edit' ? handleInputChange : (e) => handleNewInputChange(e, newProject, setNewProject)}></InputGroup>
                    </div>
                    <InputGroup label='Description' type='text' id='dsecription' name='description' value={mode === 'edit' ? list[formIndex].description : newProject.description} onChange={mode === 'edit' ? handleInputChange : (e) => handleNewInputChange(e, newProject, setNewProject)}></InputGroup>
                    <div className='form-button-container'>
                        <button type='button' onClick={mode === 'edit' ? handleCancelForm : () => handleCloseForm('project')} className='form-cancel'>Cancel</button>
                        <button type='submit' onClick={mode === 'edit' ? () => handleCloseForm('project') : null} className='form-save'>{mode === 'edit' ? 'Save Changes' : 'Add Project'}</button>
                    </div>
                </form>
            )}
            {!showForm && (
                <button className='add-button' onClick={() => handleShowForm('add')}><i className="fa-solid fa-plus"></i>  Project</button>
            )}
          </>
        )}
    </div>
  )
}