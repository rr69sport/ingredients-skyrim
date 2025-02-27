import styles from './App.module.css'
import { useState } from 'react'
import { allIngredients } from './database/all-ingredients'
import IngredientsList from './components/IngredientsList'
import { normaliceCharacters } from './utils/normailizeCharacters'

const App = () => {
  const [filterIngredient, setFilterIngredient] = useState<string | null>(null)

  const handleReset = () => {
    setFilterIngredient(null)
  }

  const filteredIngredients = filterIngredient !== null && filterIngredient.length > 0
    ? allIngredients.filter(ingredient => {
      return ingredient.effects.find(effect => normaliceCharacters({ string: effect }).includes(normaliceCharacters({ string: filterIngredient })))
    })
    : allIngredients

  return (
    <>
      <header>
        <h1 className={styles.title}>Ingredients Skyrim</h1>

        <div className={styles.filters}>
          <button className={styles.filter}>Todos los ingredientes</button>
          <button className={styles.filter}>Solo ingredientes de Skyrim</button>
          <button className={styles.filter}>Solo ingredientes de Dawnguard</button>
          <button className={styles.filter}>Solo ingredientes de Dragonbron</button>
        </div>
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
            <button className={styles.formActionsButton} type='reset' onClick={handleReset}>Borrar filtro</button>
          </div>
        </form>
      </footer>
    </>
  )
}

export default App
