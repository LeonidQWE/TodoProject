import { useState } from 'react';
import PageTitle from '../components/PageTitle';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import TodosActions from '../components/TodosActions';
import CompletedTodosText from '../components/CompletedTodosText';
import TodoTask from '../class/TodoTask';
import Todo from '../interfaces/Todo';
import styles from './App.module.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddNewTodo = (text: string) => {
    if (!text) return;
    const newTodo: Todo = new TodoTask(text);
    setTodos([...todos, newTodo]);
  }

  const handleRemoveTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const handleToggleCompleteTodo = (id: string) => {
    setTodos(todos.map((todo) => {
      return todo.id === id
        ? {...todo, isCompleted: !todo.isCompleted}
        : {...todo}
    }))
  }

  const handleResetCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const handleDeleteAllTodos = () => {
    setTodos([])
  }

  const completedTodosCount = todos.filter(todo => todo.isCompleted).length

  return (
    <div className={styles.app}>
      <PageTitle>Todo</PageTitle>
      <TodoForm addNewTodo={handleAddNewTodo} />
      {!!todos.length
        &&
      <TodosActions
        completedTodosExist={!!completedTodosCount}
        resetCompletedTodos={handleResetCompletedTodos}
        deleteAllTodos={handleDeleteAllTodos}/>}
      <TodoList
        todos={todos}
        deleteTodo={handleRemoveTodo}
        toggleCompleteTodo={handleToggleCompleteTodo}/>
      {!!completedTodosCount && <CompletedTodosText>{`You have completed ${completedTodosCount} ${completedTodosCount > 1 ? 'todos' : 'todo'}`}</CompletedTodosText>}
    </div>
  )
}

export default App
