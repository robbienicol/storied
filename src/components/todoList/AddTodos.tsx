import React, { useState, useEffect, ChangeEvent } from "react"
import { ITodoState, ITodoItem } from "./TodoList"

const AddTodos = ({ setTodos, todos }: ITodoState) => {
  const [inputText, setInputText] = useState<string>("")

  // Storing todos in local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  // Fetching Todos
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos")
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
  }, [])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  const handleAddTodo = () => {
    // If length is 0 basically
    if (inputText.trim() === "") {
      return
    }

    const newTodo: ITodoItem = {
      // FIX: i dont like storing the date as an id
      id: Date.now(),
      text: inputText,
      isFavorite: false,
    }

    setTodos([newTodo, ...todos])
    setInputText("")
  }
  return (
    <div className="flex mb-4">
      <div className="pr-4 flex justify-center align-middle">
        <button
          className="bg-black w-20 hover:bg-gray-600 text-white text-sm rounded px-1"
          onClick={handleAddTodo}
        >
          Add Note
        </button>
      </div>
      <input
        type="text"
        className="border border-gray-300 rounded px-4 py-2 w-full text-black"
        placeholder="add a note"
        value={inputText}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default AddTodos
