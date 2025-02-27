import { useState } from 'react'
import type { IngredientType } from '../types'
import { normaliceCharacters } from '../utils/normailizeCharacters'
import styles from './IngredientsList.module.css'

interface Props {
  ingredients: IngredientType[]
}

const IngredientsList = ({ ingredients }: Props) => {
  const [findEffects, setFindEffects] = useState<IngredientType['effects'] | null>(null)
  console.log({ findEffects })
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
          <th className={styles.th}>Fuente</th>
        </tr>
      </thead>
      <tbody>
        {
          ingredients.length > 0
            ? ingredients.map((ingredient) => {
              const ingredientId = normaliceCharacters({ string: `${ingredient.name}`, searchValue: / /g, replaceBy: '-' })

              return (
                <tr className={styles.tr} key={ingredientId}>
                  <td onClick={() => { setFindEffects(ingredient.effects) }} data-added={ingredient.addedBy} className={`${styles.td} ${styles.name}`}>{ingredient.name}</td>
                  {
                    ingredient.effects.map(effect => {
                      const effectId = normaliceCharacters({ string: `${ingredientId}-${effect}`, searchValue: / /g, replaceBy: '-' })
                      return <td key={effectId} className={styles.td}>{effect}</td>
                    })
                  }
                  <td className={styles.td}>{ingredient.weight}</td>
                  <td className={styles.td}>{ingredient.description}</td>
                </tr>
              )
            })
            : <tr><td className={styles.empty} colSpan={7}>No hay coincidencias</td></tr>
        }
      </tbody>
    </table>
  )
}

export default IngredientsList
