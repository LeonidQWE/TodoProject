import TodoItem from '../TodoItem';
import EmptyTodoListMessage from '../EmptyTodoListMessage';
import TodoListProps from '../../interfaces/TodoListProps';
import styles from './TodoList.module.css';

const TodoList: React.FC<TodoListProps> = ({todos, deleteTodo}) => {

  return (
    <div className={styles.todoList}>
      {!todos.length && <EmptyTodoListMessage>Todo List is Empty</EmptyTodoListMessage>}
      {todos.map((todo) => <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>)}
    </div>
  )
}

export default TodoList
