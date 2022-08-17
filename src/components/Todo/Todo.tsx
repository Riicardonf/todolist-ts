import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { v4 as uuid} from 'uuid';

import styles from './Todo.module.css';

import { TodoList, TaskProps } from "../TodoList/TodoList";

export function Todo(){
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const [newTask, setNewTask] = useState('');

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
    <div>
      <div className={styles.taskInput}>
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
      </div>

      <TodoList tasks={tasks} />  
    </div>
  )
}