import Todo from '../interfaces/Todo';

interface TodoItemProps {
  todo: Todo
  deleteTodo: (id: string) => void
}

export default TodoItemProps
