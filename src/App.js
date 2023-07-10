import { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  function addItem() {
    if (!newItem) {
      alert("Please enter an item");
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);     
    setNewItem("");
    console.log(items);
  }
  function deleteItem(id) { 
    // console.log(id)
    const newArray = items.filter(item => item.id !== id)
    setItems(newArray);
  }
  return (
    <div className="App">
      <h1>Todo List App</h1>
      <input
        type="text"
        placeholder="Add an item ..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>ADD</button>
      <ul>
        {items.map((item) => {
          return <li key={item.key}>{item.value} <button onClick={() => deleteItem(item.id)}>❌</button></li>;
        })}
      </ul>
    </div>
  );
}

export default App;
