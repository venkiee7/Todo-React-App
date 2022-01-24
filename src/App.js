import { useState } from "react";


const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = event  => {
    event.preventDefault()
    const newTask = {text: inputValue, isCompleted: false}
    setTasks([newTask, ...tasks])
    setInputValue('')
  }

  const completeTask = task => {
    const taskIndex = tasks.indexOf(task)
     
    const tasksArray = [...tasks]
    tasksArray[taskIndex] = {...task, isCompleted: true}

    setTasks(tasksArray)
  }

  const removeTask = task => {
    const taskIndex = tasks.indexOf(task)
     
    const tasksArray = [...tasks]
    tasksArray.splice(taskIndex,1)

    setTasks(tasksArray)
  }

  return (
    <div className="container ms-5 mt-5">
      <h1 className="mb-5">My Todo App</h1>
      <form className="mb-5" onSubmit={addTask}>
        <input type="text" className="me-2 p-1" placeholder="what do you want to do?" value={inputValue} onChange={event => setInputValue(event.target.value)}/>
        <button type="submit" className="btn btn-primary">Add task</button>
      </form>

      {tasks.map((task, index) => (
        <div key={index} className="row row-cols-2 align-items-center">
          <p className={`w-25 mt-3 ${task.isCompleted && 'text-muted text-decoration-line-through'}`}>{task.text}</p>
          {!task.isCompleted && (<button type="button" className="btn btn-sm w-auto btn-success"
          onClick={() => completeTask(task)}
          >Complete</button>)}
          
          {task.isCompleted && (<button type="button" className="btn btn-sm w-auto btn-danger"
          onClick={() => removeTask(task)}
          >Remove</button>)}
          
        </div>
      ))}
    </div>
  );
}

export default App;
