import { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  function addItem() {
    if (!newItem) {
      alert("Please enter an item");
    } else {
      const item = {
        id: Math.floor(Math.random() * 1000),
        value: newItem,
      };
      setItems((oldList) => [...oldList, item]);
      setNewItem("");
    }
  }
  function deleteItem(id) {
    // console.log(id)
    const newArray = items.filter((item) => item.id !== id);
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
      <button className="addButton" onClick={() => addItem()}>
        Add
      </button>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.key}>
              {item.value}{" "}
              <button
                className="deleteButton"
                onClick={() => deleteItem(item.id)}
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
