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
  return (
    <>
    <div className="app">
        <form onChange={handleSubmit}>
          <div>
            <label htmlFor="ToDo">Create New ToDo</label>
            <input type="text" name="ToDo" id="ToDo" />
          </div>
          <button>Add</button>
        </form>
        <h1>ToDo List</h1>
        <ul>
          {
          <li>
              <label>
                <input type="checkbox" />
              </label>
              <button>Delete</button>
            </li>
          }
        </ul>
      </div>
    </>
  )
}

export default App
