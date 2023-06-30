import React from 'react'

function Items({item,deleteItem,updateItem}) {
  return (
    <div>
        <input type="checkbox" checked={item.completed?true:false}/>
        <p onDoubleClick={()=>updateItem(item.id)}className={item.completed?"completed":"not-completed"}>{item.title}</p>
        <button onClick={()=>deleteItem(item.id)}>Delete</button>
        <button onClick={()=>updateItem(item.id)}>Update</button>
    </div>
   
  )
}

export default Items
