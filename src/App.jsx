import { useState } from 'react'
import './App.css'
import InputGroup from './components/InputGroup'


function App() {
  return (
    <>
      <div className='edit-container'>
        <div>
          <button>Clear Resume</button>
          <button>Load Example</button>
        </div>

        <div className='personal-details edit-section '>
          <h2>Personal Details</h2>
          <InputGroup label="Full Name" type="text" id="full-name" />
          <InputGroup label="Email" type="text" id="email" />
          <InputGroup label="Phone Number" type="text" id="phone-number" />
          <InputGroup label="Address" type="text" id="address" />
        </div>
        
        <div className='edit-section '>
          <h2>Education</h2>
          
        </div>
        
        <div className='edit-section '>
          <h2>Experience</h2>
          
        </div>
      </div>
      <div className='cv-container'>
        Resume
      </div>
    </>
  )
}

export default App
