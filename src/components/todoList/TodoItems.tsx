import React from "react"
import { ITodoState } from "./TodoList"
// FIX: the any's
// FIX: make this styled components
const TodoItems = ({ setTodos, todos }: ITodoState) => {
  const handleToggleFavorite = (id: number) => {
    setTodos((prevTodos: any[]) =>
      prevTodos.map((todo: { id: number; isFavorite: boolean }) =>
        todo.id === id ? { ...todo, isFavorite: !todo.isFavorite } : todo
      )
    )
  }

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos: any[]) =>
      prevTodos.filter((todo: { id: number }) => todo.id !== id)
    )
  }

  const sortedTodos = [...todos].sort((a, b) => {
    if (a.isFavorite && !b.isFavorite) {
      return -1
    } else if (!a.isFavorite && b.isFavorite) {
      return 1
    } else {
      return 0
    }
  })
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {sortedTodos.map((todo) => (
        <div
          key={todo.id}
          className={`bg-white rounded border p-4 mx-2 my-2 ${
            todo.isFavorite ? "border-yellow-500" : "border-gray-300"
          }`}
        >
          <div className="flex text-center mb-2">
            <span className="flex-1 text-black">{todo.text}</span>
          </div>
          <div className="flex justify-between">
            <button
              className={`mr-2 text-gray-500 hover:text-gray-700 ${
                todo.isFavorite ? "text-yellow-500" : ""
              }`}
              onClick={() => handleToggleFavorite(todo.id)}
            >
              {todo.isFavorite ? "★" : "☆"}
            </button>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodoItems
