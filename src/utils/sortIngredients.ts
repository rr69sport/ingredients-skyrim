import type { SortIngredientsByType } from '../types'

const sortIngredientsBy: SortIngredientsByType = {
  ingredient: ({ ingredients }) => ingredients.toSorted((a, b) => a.name.localeCompare(b.name)),
  firstEffect: ({ ingredients }) => ingredients.toSorted((a, b) => a.effects.first.localeCompare(b.effects.first)),
  secondEffect: ({ ingredients }) => ingredients.toSorted((a, b) => a.effects.second.localeCompare(b.effects.second)),
  thirdEffect: ({ ingredients }) => ingredients.toSorted((a, b) => a.effects.third.localeCompare(b.effects.third)),
  fourthEffect: ({ ingredients }) => ingredients.toSorted((a, b) => a.effects.fourth.localeCompare(b.effects.fourth))
}

export default sortIngredientsBy
