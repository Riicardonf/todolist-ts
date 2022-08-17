import { Header } from "./components/Header/Header";
import { TaskInput } from "./components/TaskInput/TaskInput";
import { TaskList } from "./components/TaskList/TaskList";

import styles from './App.module.css';

export function App() {

  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>

        <TaskInput />

        <TaskList />
      </div>
    </>
  )
}

