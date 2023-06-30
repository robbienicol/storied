import React from "react"
import { BeakerIcon, TrashIcon, StarIcon } from "@heroicons/react/24/solid"
import { StarIcon as Unfavorited } from "@heroicons/react/24/outline"

interface ITodo {
  text: string
  id: number
  isFavorite: boolean
}
interface ITodoItemsProps {
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
  todos: ITodo[]
}

const TodoItems = ({ setTodos, todos }: ITodoItemsProps) => {
  const handleToggleFavorite = (id: number) => {
    setTodos((prevTodos: ITodo[]) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isFavorite: !todo.isFavorite } : todo
      )
    )
  }

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos: ITodo[]) =>
      prevTodos.filter((todo: { id: number }) => todo.id !== id)
    )
  }

  const sortedTodos = [...todos].sort(
    (a, b) => (b.isFavorite ? 1 : 0) - (a.isFavorite ? 1 : 0)
  )

  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {sortedTodos.map((todo) => (
        <div
          key={todo.id}
          className={`bg-white rounded border p-4 mr-2 my-2 ${
            todo.isFavorite ? "border-yellow-500" : "border-gray-300"
          }`}
        >
          <div className="flex text-center mb-2">
            <span className="flex-1 text-black">{todo.text}</span>
          </div>
          <div className="flex justify-between">
            <button
              className={`mr-2 text-gray-500  ${
                todo.isFavorite ? "text-yellow-500" : ""
              }`}
              onClick={() => handleToggleFavorite(todo.id)}
            >
              {todo.isFavorite ? (
                <StarIcon className="w-5 h-5" />
              ) : (
                <Unfavorited className="h-5 w-5 text-black-500" />
              )}
            </button>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodoItems
