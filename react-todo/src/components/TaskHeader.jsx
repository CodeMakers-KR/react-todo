export default function TaskHeader({ onCheck }) {
  const checkHandler = (event) => {
    console.log("모든 Task 완료: ", event.currentTarget.checked);

    if (window.confirm("모든 Task를 완료하시겠습니까?")) {
      onCheck();
    }

    event.currentTarget.checked = false;
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
