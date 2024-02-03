declare global {
  interface Array<T> {
    toSorted(compareFn?: (a: T, b: T) => number): T[]
  }
}

export interface IngredientType {
  name: string
  effects: {
    first: string
    second: string
    third: string
    fourth: string
  }
  weight: string
  price: string
  description: string
}

export interface SortIngredientsByType {
  ingredient: ({ ingredients }: { ingredients: Ingredient[] }) => Ingredient[]
  firstEffect: ({ ingredients }: { ingredients: Ingredient[] }) => Ingredient[]
  secondEffect: ({ ingredients }: { ingredients: Ingredient[] }) => Ingredient[]
  thirdEffect: ({ ingredients }: { ingredients: Ingredient[] }) => Ingredient[]
  fourthEffect: ({ ingredients }: { ingredients: Ingredient[] }) => Ingredient[]
}
