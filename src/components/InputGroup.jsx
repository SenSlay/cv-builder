export default function InputGroup({
  label,
  type,
  id,
  name,
  value,
  onChange,
  required,
}) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={!!required}
      />
    </div>
  );
}
