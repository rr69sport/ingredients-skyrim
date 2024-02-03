import styles from './Button.module.css'

interface ButtonProps {
  type?: 'reset' | 'submit'
  text: string
  handleClick?: () => void
}

const Button = ({ type, text, handleClick }: ButtonProps) => {
  return (
    <button onClick={handleClick} type={type} className={styles.button}>{text}</button>
  )
}

export default Button
