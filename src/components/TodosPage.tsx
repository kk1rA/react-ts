import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TodoItem from '../TodoItem'
import { ITodo } from '../types/type'
import List from './List'

const TodosPage: React.FC = () => {
  const [todos, SetTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetchTodos();
  }, [])

  const fetchTodos = async () => {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      SetTodos(response.data);
    } catch(e) {
      alert(e);
    }
  }

  return (
    <List 
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
    />
  )
}

export default TodosPage