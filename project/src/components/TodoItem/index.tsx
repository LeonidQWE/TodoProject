import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';

interface Todo {
  id: string
  title: string
  isCompleted: boolean
}

interface TodoItem {
  todo: Todo
  deleteTodo: (id: string) => void
}

const TodoItem: React.FC<TodoItem> = ({todo, deleteTodo}) => {
  const handleDoubleClickDeleteTodo = (id: string) => {
    deleteTodo(id)
  }

  return (
    <div className={styles.todo} onDoubleClick={() => handleDoubleClickDeleteTodo(todo.id)}>
      <RiTodoFill className={styles.todoIcon}/>
      <h2 className={styles.todoTitle}>{todo.title}</h2>
      <input type="checkbox" className={styles.todoCheckbox} />
    </div>
  )
}

export default TodoItem
