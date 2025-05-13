import { useRef } from "react";

export default function TaskAppender({ onAdd }) {
  const taskRef = useRef();
  const dueDateRef = useRef();
  const priorityRef = useRef();

  const buttonClickHandler = () => {
    console.log("Task: ", taskRef.current.value);
    console.log("DueDate: ", dueDateRef.current.value);
    console.log("Priority: ", priorityRef.current.value);

    if (!taskRef.current.value) {
      alert("Task를 입력해주세요.");
      return;
    }
    if (!dueDateRef.current.value) {
      alert("완료예상일자를 선택하세요.");
      return;
    }
    if (!priorityRef.current.value) {
      alert("우선순위를 선택하세요.");
      return;
    }

    onAdd(
      taskRef.current.value,
      dueDateRef.current.value,
      priorityRef.current.value
    );

    taskRef.current.value = "";
    dueDateRef.current.value = "";
    priorityRef.current.value = "";
  };

  console.log("TaskAppender Component가 실행됐음.");

  return (
    <footer>
      <input type="text" placeholder="Task" ref={taskRef} />
      <input type="date" ref={dueDateRef} />
      <select ref={priorityRef}>
        <option value="">우선순위</option>
        <option value="1">높음</option>
        <option value="2">보통</option>
        <option value="3">낮음</option>
      </select>
      <button type="button" onClick={buttonClickHandler}>
        Save
      </button>
    </footer>
  );
}
