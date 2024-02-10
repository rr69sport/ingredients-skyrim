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
  addedBy: string
}

export interface SortIngredientsByType {
  ingredient: ({ ingredients }: { ingredients: IngredientType[] }) => IngredientType[]
  firstEffect: ({ ingredients }: { ingredients: IngredientType[] }) => IngredientType[]
  secondEffect: ({ ingredients }: { ingredients: IngredientType[] }) => IngredientType[]
  thirdEffect: ({ ingredients }: { ingredients: IngredientType[] }) => IngredientType[]
  fourthEffect: ({ ingredients }: { ingredients: IngredientType[] }) => IngredientType[]
}
