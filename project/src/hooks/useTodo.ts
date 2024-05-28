import { useState } from "react";
import Todo from "../interfaces/Todo";
import TodoTask from "../class/TodoTask";

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addNewTodo = (title: string) => {
    if (!title) return;
    const newTodo: Todo = new TodoTask(title);
    setTodos([...(todos || []), newTodo]);
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleCompleteTodo = (id: string) => {
    setTodos(todos.map((todo) => {
      return todo.id === id
        ? {...todo, isCompleted: !todo.isCompleted}
        : {...todo}
    }))
  }

  return {
    todos,
    addNewTodo,
    deleteTodo,
    toggleCompleteTodo,
  }
}

export default useTodo
