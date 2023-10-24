// Components
import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

// CSS Imports
import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Archimedes Rocha"
            content="Lorem Ipsum dolor sit amot consectetur adipisicing elit."
          />
        </main>
      </div>
    </>
  )
}
