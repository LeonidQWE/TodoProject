import Todo from '../interfaces/Todo'

interface TodoListProps {
  todos: Todo[]
  deleteTodo: (id: string) => void
}

export default TodoListProps
