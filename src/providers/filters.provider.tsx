import { useState } from 'react'
import { FiltersContext } from '../contexts/filters.context'
import { FILTERS_DEFAULT_VALUES } from '../constants/filters.default-values'

export const FiltersProvider = ({ children }: { children: React.ReactNode }) => {
  const [filters, setFilters] = useState(FILTERS_DEFAULT_VALUES)

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}>
      { children }
    </FiltersContext.Provider>
  )
}
