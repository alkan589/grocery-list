import React from 'react'

function Form({item,setItem,addItem}) {

  return (
    <div>
      <input type="text"
       value={item} 
       placeholder="WHAT WİLL YOU PURCHASE FROM GROCERY?"
       onChange={(e)=>setItem(e.target.value)} 
       className='İTEM'/>
      <input type='button'
       onClick={addItem}
        value="GÖNDER"/>
    </div>
  )
}

export default Form
