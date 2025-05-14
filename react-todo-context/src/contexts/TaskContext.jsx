import { createContext, useState } from "react";

// Context 의 Interface를 생성.
// - Context로 제공할 기능들과 State를 정의한다.
// - Context를 사용할 때 자동완성을 도와준다.
// 다른 컴포넌트에서 TaskContext 컴포넌트를 통해 state와 함수를 제공 받는다.
export const TaskContext = createContext({
  todoLists: [], // context가 제공할 state의 이름과 형태.
  done(taskId) {}, // todoLists에서 하나의 Task를 완료시키는 함수의 형태.
  allDone() {}, // todoLists에서 모든 Task를 완료시키는 함수의 형태.
  add(task, dueDate, priority) {}, // todoLists에 하나의 Task를 등록하는 함수의 형태.
});

/**
 * TodoApp이 제공하는 State와
 * 각 컴포넌트에 흩어져있는 state 변경함수들을 이 컴포넌트에 몰아놓고
 * 필요한 곳에서 사용한다.
 */
export default function TaskContextProvider({ children, initialState }) {
  // TaskContext가 공유할 state값과 함수.
  const [todoLists, setTodoLists] = useState(initialState ?? []);

  // TaskContext의 구체적인 구현을 시작.
  const taskContextValue = {
    todoLists, // context가 제공할 state의 이름과 형태.
    done(taskId) {
      setTodoLists((prevTodoList) => {
        const newTodoList = [...prevTodoList];

        newTodoList.map((todo) => {
          if (todo.id === taskId) {
            todo.done = true;
          }
          return todo;
        });
        return newTodoList;
      });
    }, // todoLists에서 하나의 Task를 완료시키는 함수의 형태.
    allDone() {
      setTodoLists((prevTodoList) => {
        const newTodoList = [...prevTodoList];

        newTodoList.map((todo) => {
          todo.done = true;
          return todo;
        });
        return newTodoList;
      });
    }, // todoLists에서 모든 Task를 완료시키는 함수의 형태.
    add(task, dueDate, priority) {
      setTodoLists((prevTodoList) => {
        const newTodoList = [...prevTodoList];
        newTodoList.push({
          id: "item" + (prevTodoList.length + 1),
          task,
          dueDate,
          priority,
          done: false,
        });
        return newTodoList;
      });
    }, // todoLists에 하나의 Task를 등록하는 함수의 형태.
  };

  return (
    <TaskContext.Provider value={taskContextValue}>
      {children}
    </TaskContext.Provider>
  );
}
