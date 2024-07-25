function App() {

  return (
    <>
    <div className="app">
        <form>
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
