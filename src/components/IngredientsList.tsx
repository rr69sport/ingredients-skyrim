import type { IngredientType } from '../types'

import { useFilters } from '../hooks/useFilters'
import { normaliceCharacters } from '../utils/normailizeCharacters'
import { allIngredients } from '../database/all-ingredients'
import styles from './IngredientsList.module.css'

const IngredientsList = () => {
  const { filterIngredients } = useFilters()

  const filteredIngredients: IngredientType[] = filterIngredients(allIngredients)

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
      <tbody className={styles.tbody}>
        {
          filteredIngredients.length > 0
            ? filteredIngredients.map((ingredient) => {
              const ingredientId = normaliceCharacters({ string: `${ingredient.name}`, searchValue: / /g, replaceBy: '-' })

              return (
                <tr className={styles.tr} key={ingredientId}>
                  <td data-added={ingredient.addedBy} className={`${styles.td} ${styles.name}`}>{ingredient.name}</td>
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
