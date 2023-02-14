import React, { useState } from "react";

function NewPlantForm( { onAddPlant }) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    price: 0
  })

  function handleFormUpdate(value, name ) {
    console.log('value', value)
    console.log('name', name)
    setForm( {
      ...form,
      [name]: value
    })
  }

  function handleFormSubmit(e) {
    //do something with form state callback
    e.preventDefault()
    onAddPlant(form)
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Plant name" 
        onChange={(e => handleFormUpdate(e.target.value, e.target.name))}/>
        <input type="text" name="image" placeholder="Image URL" 
        onChange={(e => handleFormUpdate(e.target.value, e.target.name))}/>
        <input type="number" name="price" step="0.01" placeholder="Price" 
        onChange={(e => handleFormUpdate(e.target.value, e.target.name))}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
