import { useContext } from 'react'
import type { ByEffectHandlerType, AddedByHandlerType, FormSubmitHandlerType } from '../types'
import styles from './FormFilters.module.css'
import { FiltersContext } from '../contexts/filters.context'

const FormFilters = () => {
  const { setFilters } = useContext(FiltersContext)

  const handleChangeAddedBy: AddedByHandlerType = (event) => {
    if (setFilters !== undefined) {
      setFilters(prevState => ({
        ...prevState,
        addedBy: event.target.value
      }))
    }
  }

  const handleChangeByEffect: ByEffectHandlerType = (event) => {
    if (setFilters !== undefined) {
      setFilters(prevState => ({
        ...prevState,
        byEffect: event.target.value
      }))
    }
  }

  const handleResetByEffectFilter = () => {
    if (setFilters !== undefined) setFilters(prevState => ({ ...prevState, byEffect: '' }))
  }

  const handleSubmit: FormSubmitHandlerType = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formFilters}>
      <div className={styles.byEffectFilter}>
        <input onChange={handleChangeByEffect} className={styles.inputSearch} type="text" name="byEffect" placeholder="Ej: restaurar salud" />
        <button type="reset" className={styles.button} onClick={handleResetByEffectFilter}>Borrar búsqueda</button>
      </div>
      <div className={styles.addedByFilters}>
        <label tabIndex={0} className={styles.label}>
          <input className={styles.input} onChange={handleChangeAddedBy} value="all" type="radio" name="addedby" />
          <span>Todos</span>
        </label>
        <label tabIndex={0} className={styles.label}>
          <input className={styles.input} onChange={handleChangeAddedBy} value="Skyrim" type="radio" name="addedby" />
          <span>Skyrim</span>
        </label>
        <label tabIndex={0} className={styles.label}>
          <input className={styles.input} onChange={handleChangeAddedBy} value="Dawnguard" type="radio" name="addedby" />
          <span>Dawnguard</span>
        </label>
        <label tabIndex={0} className={styles.label}>
          <input className={styles.input} onChange={handleChangeAddedBy} value="Dragonborn" type="radio" name="addedby" />
          <span>Dragonborn</span>
        </label>
      </div>
    </form>
  )
}

export default FormFilters
