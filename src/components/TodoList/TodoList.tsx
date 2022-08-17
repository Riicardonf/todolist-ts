import styles from './TodoList.module.css';

import clipboard from '../../assets/clipboard.svg';


export interface TaskProps {
  id: string;
  description: string;
  isDone: boolean;
}

interface TaskList {
  tasks: TaskProps[];
}

export function TodoList({ tasks }: TaskList){ 

  const createdTasksCount = tasks.length;
  const isDoneTaskCount = tasks.filter(task => task.isDone).length

  return (
    <div className={styles.tasks}>
      <div className={styles.tasksInfo}>
        <span className={styles.createdTasks}>
          Tarefas Criadas <span className={styles.createdTaskscounter}>{createdTasksCount}</span> 
        </span>
        <span className={styles.doneTasks}> 
          Concluídas <span className={styles.doneTasksCounter}>{isDoneTaskCount} de {createdTasksCount}</span> 
        </span>
      </div>

      <div className={styles.tasksList}>
        {tasks.length === 0 ?
          <div className={styles.tasksListEmpty}>
            <div>
              <img src={clipboard} />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </div> : 
            tasks.map(task => task.description)
          }
      </div>
    </div>
  )
}