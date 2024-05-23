import { RiTodoFill, RiDeleteBinLine } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import TodoItemProps from '../../interfaces/TodoItemProps';
import styles from './Todo.module.css';

const TodoItem: React.FC<TodoItemProps> = ({todo, deleteTodo, toggleCompleteTodo}) => {
  const handleDoubleClickDeleteTodo = (id: string) => {
    deleteTodo(id)
  }

  return (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.todoCompletedTodo : ''}`}>
      <div className={styles.todoContent}>
        <RiTodoFill className={styles.todoIcon}/>
        <h2 className={styles.todoTitle}>{todo.title}</h2>
      </div>
      <div className={styles.todoControl}>
        <FaCheck
          className={`${styles.todoCompleteBtn} ${todo.isCompleted ? styles.todoCompleteBtnActive : ''}`}
          onClick={() => toggleCompleteTodo(todo.id)}/>
        <RiDeleteBinLine
          className={styles.todoDeleteBtn }
          onClick={() => handleDoubleClickDeleteTodo(todo.id)}/>
      </div>
    </div>
  )
}

export default TodoItem
