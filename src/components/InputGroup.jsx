export default function InputGroup({ label, type, id, name, onChange}) {
    return (
      <div className="input-group">
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} name={name} onChange={onChange}/>
      </div>
    );
}