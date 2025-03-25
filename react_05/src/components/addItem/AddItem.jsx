import React from 'react'
const AddItem = ({onAdd}) => {
    let title= "";
    const submitHandler=(event)=>{
    event.preventDefault();
    onAdd(title);
    }
    const inputHandler=(event)=>{
    // console.log(event.target.value);
    title = event.target.value;
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label >item name</label>
                <input onChange={inputHandler} type="text" />
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddItem