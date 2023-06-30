import React, {  useState } from 'react';
import Form from './Form';
import Items from "./Items"
import "./style.css"
function App() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState('');

  const addItem = () => {
    const newItem = {
      title:item,
      id: Math.floor(Math.random()*10000000),
      completed: false,
    };

    setItems([...items, newItem]);
    console.log(item);
    setItem('');
  };

  const deleteItem = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };
  const updateItem = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
  
    setItems(updatedItems);
  };
  
  return (
    <>
      <h1>Grocery Item List</h1>
      <Form
        item={item}
        addItem={addItem}
        setItem={setItem}
      />
     {
        items.map((item)=>(
            <Items item={item} key={item.id} deleteItem={deleteItem} updateItem={updateItem} className="item"/>
        ))
     }
    </>
  );
}

export default App;
