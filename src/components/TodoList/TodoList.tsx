import styles from './TodoList.module.css';

import clipboard from '../../assets/clipboard.svg';
import { Task, TaskProps } from '../Task/Task';

interface TaskList {
  tasks: TaskProps[];
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id: string) => void;
}

export function TodoList({ tasks, onDeleteTask, onCompleteTask }: TaskList ){ 
  
  const createdTasksCount = tasks.length;
  const isDoneTasksCount = tasks.filter(task => task.isDone).length

  return (
    <div>
      <div className={styles.tasksInfo}>
        <span className={styles.createdTasks}>
          Tarefas Criadas <span>{createdTasksCount}</span> 
        </span>
        <span className={styles.doneTasks}> 
          Concluídas <span>{isDoneTasksCount} de {createdTasksCount}</span> 
        </span>
      </div>

      <div className={styles.tasksList}>
        {tasks.length === 0 ?
          <div className={styles.emptyList}>
            <img src={clipboard} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div> : 
            tasks.map(task => 
              <Task 
                key={task.id} 
                id={task.id} 
                description={task.description} 
                isDone={task.isDone} 
                onDeleteTask={onDeleteTask}
                onCompleteTask={onCompleteTask}
              />
            )
          }
      </div>
    </div>
  )
}