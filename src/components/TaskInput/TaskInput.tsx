import styles from './TaskInput.module.css';

import { PlusCircle } from 'phosphor-react';


export function TaskInput(){
  return (
    <div className={styles.taskInput}>
      <input type="text" placeholder="Adicione uma nova tarefa"/>
      <button> 
        Criar <PlusCircle/>  
      </button>
    </div>
  )
}