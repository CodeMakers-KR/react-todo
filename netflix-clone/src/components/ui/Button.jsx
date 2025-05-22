export function CircleButton({
  color = "",
  icon = "",
  text = "",
  onClick = () => {},
}) {
  return (
    <button
      type="button"
      className={`circle-button ${color} ${icon}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export function Button({
  color = "",
  icon = "",
  text = "",
  onClick = () => {},
}) {
  return (
    <button type="button" className={`${color} ${icon}`} onClick={onClick}>
      {text}
    </button>
  );
}
