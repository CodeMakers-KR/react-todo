export default function TaskItem({
  done,
  id,
  task,
  dueDate,
  priority,
  onCheckboxClick,
}) {
  return (
    <li className="task-item">
      <input
        id={id}
        type="checkbox"
        checked={done}
        value={id}
        onChange={onCheckboxClick}
        disabled={done}
      />
      <label htmlFor={id} className={done ? "done-todo" : undefined}>
        {task}
      </label>
      <span className={`due-date ${done ? "done-todo" : undefined}`}>
        {dueDate}
      </span>
      <span className={`priority ${done ? "done-todo" : undefined}`}>
        {priority}
      </span>
    </li>
  );
}
