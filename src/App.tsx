import { useState } from 'react'
import styles from './App.module.css'
import { allIngredients } from './database/all-ingredients'
import IngredientsList from './components/IngredientsList'
import { normaliceCharacters } from './utils/normailizeIngredientName'

const App = () => {
  const [filterIngredient, setFilterIngredient] = useState<string | null>(null)

  const handleReset = () => {
    setFilterIngredient(null)
  }

  const filteredIngredients = filterIngredient !== null && filterIngredient.length > 0
    ? allIngredients.filter(ingredient => {
      return normaliceCharacters(ingredient.effects.first).toLowerCase().includes(normaliceCharacters(filterIngredient).toLowerCase()) ||
        normaliceCharacters(ingredient.effects.second).toLowerCase().includes(normaliceCharacters(filterIngredient).toLowerCase()) ||
        normaliceCharacters(ingredient.effects.third).toLowerCase().includes(normaliceCharacters(filterIngredient).toLowerCase()) ||
        normaliceCharacters(ingredient.effects.fourth).toLowerCase().includes(normaliceCharacters(filterIngredient).toLowerCase())
    })
    : allIngredients

  return (
    <>
      <header>
        <h1 className={styles.title}>Ingredients Skyrim</h1>
      </header>

      <IngredientsList ingredients={filteredIngredients} />

      <footer className={styles.footer}>
        <form className={styles.formSearch}>
          <input
            onChange={(e) => { setFilterIngredient(e.target.value) }}
            className={styles.inputSearch}
            type="text"
            placeholder='Ej: restaurar salud' />

          <div className={styles.formActions}>
            <button type='reset' onClick={handleReset}>Restaurar</button>
          </div>
        </form>
      </footer>
    </>
  )
}

export default App
