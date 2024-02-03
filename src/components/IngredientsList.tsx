import type { IngredientType } from '../types'
import styles from './IngredientsList.module.css'

interface Props {
  ingredients: IngredientType[]
}

const IngredientsList = ({ ingredients }: Props) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.th}>Ingrediente</th>
          <th className={styles.th}>Primer Efecto</th>
          <th className={styles.th}>Segundo Efecto</th>
          <th className={styles.th}>Tercer Efecto</th>
          <th className={styles.th}>Cuarto Efecto</th>
          <th className={styles.th}>Peso</th>
          <th className={styles.th}>Valor</th>
          <th className={styles.th}>Fuente</th>
        </tr>
      </thead>
      <tbody>
        {
          ingredients.map((ingredient) => {
            const id = ingredient.name.toLowerCase().replace(' ', '-')
            return (
              <tr className={styles.tr} key={id}>
                <td className={`${styles.td} ${styles.name}`}>{ingredient.name}</td>
                <td onClick={() => { }} className={`${styles.td} ${styles.pointer}`}>{ingredient.effects.first}</td>
                <td onClick={() => { }} className={`${styles.td} ${styles.pointer}`}>{ingredient.effects.second}</td>
                <td onClick={() => { }} className={`${styles.td} ${styles.pointer}`}>{ingredient.effects.third}</td>
                <td onClick={() => { }} className={`${styles.td} ${styles.pointer}`}>{ingredient.effects.fourth}</td>
                <td className={styles.td}>{ingredient.weight}</td>
                <td className={styles.td}>{ingredient.price}</td>
                <td className={styles.td}>{ingredient.description}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default IngredientsList
