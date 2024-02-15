import { type IngredientType } from '../types'
import { baseGameIngredients } from './base-game.ingredients'
import { dlcDawnguardIngredients } from './dlc-dawnguard.ingredients'
import { dlcDragonbornIngredients } from './dlc-dragonbron.ingredients'

export const allIngredients: IngredientType[] = [...baseGameIngredients, ...dlcDawnguardIngredients, ...dlcDragonbornIngredients]
