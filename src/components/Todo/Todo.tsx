import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { v4 as uuid} from 'uuid';

import styles from './Todo.module.css';

import { TodoList } from "../TodoList/TodoList";
import { TaskProps } from '../Task/Task';

export function Todo(){
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const [newTask, setNewTask] = useState('');

  function deleteTask(id: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== id)

    setTasks(tasksWithoutDeletedOne);
  }

  function completeTask(id: string){
    const updatedTasks = tasks.map(task => (task.id === id) ? {...task, isDone: !task.isDone }: task);

    setTasks(updatedTasks);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const createdTask = { id: uuid(), description: newTask, isDone: false };

    setTasks([...tasks, createdTask]);

    setNewTask('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');

    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  return (
    <div className={styles.todo}>
      <form onSubmit={handleCreateNewTask}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button type="submit" disabled={newTask.trim().length < 3}> 
          Criar <PlusCircle/>  
        </button>
      </form>
      
      <TodoList tasks={tasks} onDeleteTask={deleteTask} onCompleteTask={completeTask} />  
    </div>
  )
}