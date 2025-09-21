import { createContext } from 'react'
import { FILTERS_DEFAULT_VALUES } from '../constants/filters.default-values'
import { type FilterContextType } from '../types'

export const FiltersContext = createContext<FilterContextType>({ filters: FILTERS_DEFAULT_VALUES })
