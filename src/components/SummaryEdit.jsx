import InputGroup from './InputGroup';

export default function SummaryEdit({
  data,
  handleInputChange,
  isExpanded,
  toggleExpand,
}) {
  return (
    <div className="summary-input edit-section">
      <div className="section-header" onClick={toggleExpand}>
        <h2>Summary</h2>
        <button className="toggle-button">{isExpanded ? '▼' : '►'}</button>
      </div>

      {isExpanded && (
        <div className="input-container">
          <InputGroup
            label="Description"
            type="text"
            id="description"
            name="description"
            value={data.description}
            onChange={handleInputChange}
          />
        </div>
      )}
    </div>
  );
}
