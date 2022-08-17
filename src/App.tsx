import { Header } from "./components/Header/Header";
import { Todo } from "./components/Todo/Todo";

import styles from './App.module.css';

export function App() {

  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Todo />
      </div>
    </>
  )
}

