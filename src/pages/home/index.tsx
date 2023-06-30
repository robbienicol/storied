"use client"
import Header from "@/components/header/Header"
import TodoList from "@/components/todoList/TodoList"
import "tailwindcss/tailwind.css"

export default function Home() {
  return (
    <div>
      <Header />
      <TodoList />
    </div>
  )
}
