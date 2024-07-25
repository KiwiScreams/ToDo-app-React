function App() {
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
  return (
    <>
    <div className="app">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="ToDo">Create New ToDo</label>
            <input type="text" name="ToDo" id="ToDo" value={newTask}
              onChange={e => createNewTask(e.target.value)} />
          </div>
          <button>Add</button>
        </form>
        <h1>ToDo List</h1>
        <ul>
          {todos.length === 0 && "No ToDos"}
          {todos.map(todo => {
            return <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} onChange={e => toggleTask(todo.id, e.target.checked)} />
                {todo.title}
              </label>
              <button onClick={() => deleteTask(todo.id)}>Delete</button>
            </li>
          }
          )}
        </ul>
      </div>
    </>
  )
}

export default App
