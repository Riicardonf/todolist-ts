import styles from './Task.module.css';
import { CheckCircle, Circle, Trash } from 'phosphor-react'

export interface TaskProps {
  id: string;
  description: string;
  isDone: boolean;
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id: string) => void;
}


export function Task({id, description, isDone, onDeleteTask, onCompleteTask}: TaskProps){

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleCompleteTask() {
    onCompleteTask(id);
  }

  return(
    <div className={styles.task}>
      {isDone ? 
        <div className={styles.taskDone}>
          <button type="button" onClick={handleCompleteTask}> 
           <CheckCircle weight="fill" size={24} /> 
          </button>
          <span>{description}</span>
        </div> : 
        <div className={styles.taskNotDone}>
          <button type="button" onClick={handleCompleteTask}> 
            <Circle size={24} /> 
          </button>
          <span>{description}</span>
        </div> 
      } 
      <button type="button" onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  )
}