import styles from './Credits.module.css'

const Credits = () => {
  return (
    <>
      <h2 className={styles.h2}>Ingredientes y efectos extraídos de</h2>
      <ul className={styles.ul}>
        <li>
          <a className={styles.anchor} href="https://elderscrolls.fandom.com/es/wiki/Ingredientes_(Skyrim)" target="_blank" rel="noreferrer">
            https://elderscrolls.fandom.com/es/wiki/Ingredientes_(Skyrim)
          </a>
        </li>
        <li>
          <a className={styles.anchor} href="https://elderscrolls.fandom.com/es/wiki/Ingredientes_(Dawnguard)" target="_blank" rel="noreferrer">
            https://elderscrolls.fandom.com/es/wiki/Ingredientes_(Dawnguard)
          </a>
        </li>
        <li>
          <a className={styles.anchor} href="https://elderscrolls.fandom.com/es/wiki/Ingredientes_(Dragonborn)" target="_blank" rel="noreferrer">
            https://elderscrolls.fandom.com/es/wiki/Ingredientes_(Dragonborn)
          </a>
        </li>
      </ul>
    </>
  )
}

export default Credits
