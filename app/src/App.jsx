import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

//add
  function addTodo() {
    console.log("cliked add");
    if (input === "") 
      return;
    let obj = { id: todo.length + 1, text: input, isCompleted: false };
    setTodo([...todo, obj]);
    setInput("");
  }

  // delete
  function deleteTodo(id) {
    console.log("delete:", id);
    let arr = todo.filter((item) => item.id !== id);
    setTodo(arr);
  }

//complete
  function completeTodo(id){
    console.log("clicked:",id)
    let updated=todo.map((item)=>{
      if(item.id === id){
        item.isCompleted=!item.isCompleted
        return item
      }
      return item
    })
    console.log("completed:",updated)
    setTodo(updated)
  }

//edit 
  function editTodo(id) {
    console.log("edit", id)
    let value = prompt("Edit todo");
    let result = todo.map((item) => {
      if (item.id === id) {
        item.text = value;   
      }
      return item;
    });
    setTodo(result);
  }

  return (
      <div>
      <h3>Todo App</h3>
      <input value={input}
        onChange={(e) => {
          console.log("input:", e.target.value);
          setInput(e.target.value);
        }}/> <button onClick={addTodo}>Create</button>
      <div>
        {todo.map((item) => (
          <div key={item.id}>
            <span style={{ textDecoration: item.isCompleted ? "line-through":""}}>
              {item.text}
            </span>
            <button onClick={() => completeTodo(item.id)}>complete</button>
            <button onClick={() => editTodo(item.id)}>edit</button>
            <button onClick={() => deleteTodo(item.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
