import React from 'react'

import TodoItem from '../TodoItem'

import styles from './TodoList.module.css'

interface Todo {
  id: string
  title: string
  isCompleted: boolean
}

interface TodoListProps {
  todos: Todo[]
}

const TodoList: React.FC<TodoListProps> = ({todos}) => {
  return (
    <div className={styles.todoList}>
      {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />
      )}
    </div>
  )
}

export default TodoList
