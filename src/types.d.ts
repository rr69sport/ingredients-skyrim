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
