import styles from './Footer.module.css'

const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <footer className={styles.footer}>
      {children}
    </footer>
  )
}

export default Footer
