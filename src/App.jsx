import { useState } from 'react'
import './App.css'
import InputGroup from './components/InputGroup'


function App() {
  const [formData, setFormData] = useState({
    fullName: 'Irvan Castro',
    email: 'email@gmail.com',
    phoneNumber: '+63 123 456 7890',
    address: 'Dubai, UAE',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className='edit-container'>
        <div>
          <button>Clear Resume</button>
          <button>Load Example</button>
        </div>

        <div className='personal-details edit-section '>
          <h2>Personal Details</h2>
          <div className="input-container">
            <InputGroup label="Full Name" type="text" id="full-name" name="fullName" value={formData.fullName} onChange={handleInputChange} />
            <InputGroup label="Email" type="text" id="email" name="email" value={formData.email} onChange={handleInputChange} />
            <InputGroup label="Phone Number" type="text" id="phone-number" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange}/>
            <InputGroup label="Address" type="text" id="address" name="address" value={formData.address} onChange={handleInputChange}  />
          </div>
        </div>
        
        <div className='edit-section '>
          <h2>Education</h2>
          
        </div>
        
        <div className='edit-section '>
          <h2>Experience</h2>
          
        </div>
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
      </div>
    </>
  )
}

export default App
