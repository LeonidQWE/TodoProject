import { RiTodoFill } from 'react-icons/ri';
import TodoItemProps from '../../interfaces/TodoItemProps';
import styles from './Todo.module.css';

const TodoItem: React.FC<TodoItemProps> = ({todo, deleteTodo}) => {
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
