export default function InputGroup({ label, type, id }) {
    return (
      <div className="input-group">
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} />
      </div>
    );
}