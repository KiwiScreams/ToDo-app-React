import { useState } from "react"
import "./style.css"
export default function App() {
  const [newTask, createNewTask] = useState("")
  const [todos, setTask] = useState([])
  function handleSubmit(e) {
    e.preventDefault()
    setTask(currentTask => {
      return [...currentTask, { id: crypto.randomUUID(), title: newTask, completed: false }]
    })
    createNewTask("")
  }
  function toggleTask(id, completed) {
    setTask(currentTask => {
      return currentTask.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      }
      )
    })
  }
  function deleteTask(id) {
    setTask(currentTask => {
      return currentTask.filter(todo => todo.id !== id)
    })
  }
  return (
    <>
      <div className="app">
        <form onSubmit={handleSubmit}>
          <div className="container">
            <label htmlFor="ToDo" className="new">Create New ToDo</label>
            <input type="text" name="ToDo" id="ToDo" value={newTask}
              onChange={e => createNewTask(e.target.value)} className="todo-input" placeholder="Create new todo..."/>
              <button className="add-btn"><i className="fa-solid fa-plus"></i></button>
          </div>
        </form>
        <ul>
          {todos.length === 0 && "No ToDos"}
          {todos.map(todo => {
            return <li key={todo.id}>
                <input type="checkbox" checked={todo.completed} onChange={e => toggleTask(todo.id, e.target.checked)} />
               <label>{todo.title}</label>
              <button onClick={() => deleteTask(todo.id)} className="delete-btn"><i className="fa-solid fa-trash"></i></button>
            </li>
          }
          )}
        </ul>
      </div>
    </>
  )
}