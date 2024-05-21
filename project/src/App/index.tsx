import { useState } from 'react';
import PageTitle from '../components/PageTitle';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import Todo from '../interfaces/Todo';
import styles from './App.module.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddNewTodo = (text: string) => {
    if (!text) return;

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: text,
      isCompleted: false,
    }

    setTodos([...todos, newTodo]);
  }

  const handleRemoveTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className={styles.app}>
      <PageTitle>Todo</PageTitle>
      <TodoForm addNewTodo={handleAddNewTodo} />
      <TodoList todos={todos} deleteTodo={handleRemoveTodo} />
    </div>
  )
}

export default App
