import InputGroup from './InputGroup';

export default function SummaryEdit({data, handleInputChange}) {
  return (
    <div className="summary-input edit-section">
      <h2>Summary</h2>
      <InputGroup label="Description" type="textarea" id="description" name="description" value={data.description} onChange={handleInputChange}/>  
    </div>
  )
}