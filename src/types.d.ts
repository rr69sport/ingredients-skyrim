declare global {
  interface Array<T> {
    toSorted(compareFn?: (a: T, b: T) => number): T[]
  }
}

export interface IngredientType {
  name: string
  effects: [string, string, string, string]
  weight: string
  description: string
  addedBy: 'Skyrim' | 'Dawnguard' | 'Dragonborn'
}

/**
# REVISAR este problema

Este filtro tipa el custom hook de los filtros.

Pero `React.ChangeEvent<HTMLInputElement>` retorna `string` como tipo de dato de los inputs.
En el **FormFilters.tsx** no da problemas, pero no acepta string como tipo de dato en los tipos del custom hook

En cambio, si cambio los tipos de la función `AddedByHandlerType` a: `(event: { target: { value: FiltersType['addedBy'] }})`

Da problemas el `onChange` en los inputs en el archivo **FormFilters.tsx**

No está mal que sea un string el tipo de dato del custom hook en la propiedad `addedBy`,
pero en realidad debe ser el mismo tipo que la propiedad `addedBy` de `IngredientType`.
*/
export interface FiltersType {
  addedBy: string // IngredientType['addedBy'] | 'all'
  byEffect: string
}
// export type AddedByHandlerType = (event: { target: { value: FiltersType['addedBy'] }}) => void

/**
 * De esta forma no da error en nignún lado, pero el evento pierde los tipos
 * Pasa de: `(event: React.ChangeEvent<HTMLInputElement>)` a `(event: React.ChangeEvent<any>)`
 */
// export type AddedByHandlerType = (event: React.ChangeEvent<HTMLInputElement<FiltersType['addedBy']>>) => void
export type AddedByHandlerType = (event: React.ChangeEvent<HTMLInputElement>) => void
export type ByEffectHandlerType = (event: React.ChangeEvent<HTMLInputElement>) => void
export type FormSubmitHandlerType = (event: React.FormEvent<HTMLFormElement>) => void

export interface FilterContextType {
  filters: FiltersType
  setFilters?: React.Dispatch<React.SetStateAction<FiltersType>>
}
