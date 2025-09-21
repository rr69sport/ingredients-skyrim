import styles from './MainContent.module.css'

const MainContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.mainContent}>
      {children}
    </main>
  )
}

export default MainContent
