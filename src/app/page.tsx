"use client"
import "../app/globals.css"
import "tailwindcss/tailwind.css"
import Header from "@/components/header/Header"
import TodoList from "@/components/todoList/TodoList"

export default function App() {
  return (
    <main>
      <Header />
      <TodoList />
    </main>
  )
}
