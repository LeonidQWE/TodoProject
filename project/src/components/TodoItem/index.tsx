import React from 'react'
import styles from './Todo.module.css'

interface Todo {
  id: string
  title: string
  isCompleted: boolean
}

interface TodoItem {
  todo: Todo
}

const TodoItem: React.FC<TodoItem> = ({todo}) => {
  return (
    <div className={styles.todo}>
      <h2 className={styles.todoTitle}>{todo.title}</h2>
      <input type="checkbox" className={styles.todoCheckbox} />
    </div>
  )
}

export default TodoItem
