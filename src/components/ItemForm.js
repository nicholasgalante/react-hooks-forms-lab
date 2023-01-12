import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [nameInput, setNameInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("Produce");

  function handleNameChange(event){
    setNameInput(event.target.value)
  }

  function handleCategoryChange(event){
    setCategoryInput(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: nameInput,
      category: categoryInput,
    };
    console.log(newItem)
    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit} value={nameInput}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
