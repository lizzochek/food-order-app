import './Input.css';

export default function Input({ label, onInput }) {
  return (
    <div className='input'>
      <label>{label}</label>
      <input
        type='number'
        onChange={onInput}
      />
    </div>
  );
}
