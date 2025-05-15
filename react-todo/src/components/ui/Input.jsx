export default function Input({ id, title, type, placeholder, ref }) {
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <input type={type} id={id} placeholder={placeholder} ref={ref} />
    </div>
  );
}
