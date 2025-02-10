import InputGroup from "./InputGroup"

export default function PersonalDetailsEdit({ data, handleInputChange}) {
  return (
        <div className='edit-section '>
            <h2>Personal Details</h2>
            <div className="input-container">
            <InputGroup label="Full Name" type="text" id="full-name" name="fullName" value={data.fullName} onChange={handleInputChange} />
            <InputGroup label="Email" type="text" id="email" name="email" value={data.email} onChange={handleInputChange} />
            <InputGroup label="Phone Number" type="text" id="phone-number" name="phoneNumber" value={data.phoneNumber} onChange={handleInputChange}/>
            <InputGroup label="Address" type="text" id="address" name="address" value={data.address} onChange={handleInputChange}  />
            </div>
        </div>
    )
}