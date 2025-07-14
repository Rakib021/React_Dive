import React, { useState } from "react";
import AddTasks from "./components/AddTasks";
import TaskList from "./components/TaskList";
import { initialTasks } from "./Data/data";
export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const getNextId = (data) => {
        const maxId = data.reduce((prev, current) =>
            prev && prev > current.id ? prev : current.id, 0
        );

        return maxId + 1;
    };

  //handlers
  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: getNextId(tasks),
        text: text,
        done: false,
      },
    ]);
  };

  const handleChangeTask = (task) => {
    const nextTask = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    setTasks(nextTask);
  };

  const handleDeleteTaks =(taskId) =>{
    setTasks(tasks.filter(t =>t.id !==taskId));
  }
  return (
    <>
      <h1>Prague Itinerary</h1>

      <AddTasks onAddTask = {handleAddTask} />

      <TaskList tasks={tasks} onChangeTask = {handleChangeTask} onDeleteTask ={handleDeleteTaks} />
    </>
  );
}
