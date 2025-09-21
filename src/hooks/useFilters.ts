import { useContext } from 'react'
import { normaliceCharacters } from '../utils/normailizeCharacters'
import type { IngredientType } from '../types'
import { FiltersContext } from '../contexts/filters.context'

export const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterIngredients = (ingredients: IngredientType[]) => {
    return ingredients.filter(ingredient => {
      const byEffect = ingredient.effects.find(effect => {
        return normaliceCharacters({ string: effect }).includes(normaliceCharacters({ string: `${filters?.byEffect}` }))
      })

      return (
        (byEffect !== undefined) &&
        (
          filters.addedBy === 'all' ||
          filters.addedBy.toLowerCase() === ingredient.addedBy.toLowerCase()
        )
      )
    })
  }

  return { filterIngredients, setFilters, filters }
}
