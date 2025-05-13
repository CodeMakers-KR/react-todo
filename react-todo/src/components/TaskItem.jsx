export default function TaskItem({
  id,
  task,
  dueDate,
  priority,
  done,
  onCheck,
}) {
  const checkHandler = (event) => {
    console.log(`${id} Checked: `, event.currentTarget.checked);
    onCheck(id);
  };

  return (
    <li className="task-item">
      <input
        id={id}
        type="checkbox"
        checked={done}
        disabled={done}
        onChange={checkHandler}
      />
      <label htmlFor={id} className={done ? "done-todo" : ""}>
        {task}
      </label>
      <span className={`due-date ${done ? "done-todo" : ""}`}>{dueDate}</span>
      <span className={`priority ${done ? "done-todo" : ""}`}>{priority}</span>
    </li>
  );
}
