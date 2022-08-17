import { ClipboardText } from 'phosphor-react';
import styles from './TaskList.module.css';
import clipboard from '../../assets/clipboard.svg';

export function TaskList(){ 

  return (
    <div className={styles.tasks}>
      <div className={styles.tasksInfo}>
        <span className={styles.createdTasks}>
          Tarefas Criadas <span className={styles.counter}>0</span> 
        </span>
        <span className={styles.doneTasks}> 
          Concluídas <span className={styles.counter}>0</span> 
        </span>
      </div>

      <div className={styles.tasksList}>
        <div className={styles.tasksListEmpty}>
          <div>
            <img src={clipboard} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      </div>
    </div>
  )
}