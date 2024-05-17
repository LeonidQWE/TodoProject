import TodoItem from '../TodoItem';
import EmptyTodoListMessage from '../EmptyTodoListMessage';
import styles from './TodoList.module.css';

interface Todo {
  id: string
  title: string
  isCompleted: boolean
}

interface TodoListProps {
  todos: Todo[]
  deleteTodo: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = ({todos, deleteTodo}) => {

  return (
    <div className={styles.todoList}>
      {!todos.length && <EmptyTodoListMessage>Todo List is Empty</EmptyTodoListMessage>}
      {todos.map((todo) => <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>)}
    </div>
  )
}

export default TodoList
