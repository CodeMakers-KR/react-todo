export default function TaskHeader() {
  const checkHandler = (event) => {
    console.log("모든 Task 완료: ", event.currentTarget.checked);
  };

  return (
    <li className="tasks-header">
      <input id="checkall" type="checkbox" onChange={checkHandler} />
      <label>Task</label>
      <span className="due-date">Due Date</span>
      <span className="priority">Priority</span>
    </li>
  );
}
