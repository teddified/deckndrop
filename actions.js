import { createAction } from 'redux-actions'

const ACTIONS = {
  CHANGE_DETAIL_VIS: 'CHANGE_DETAIL_VIS',
  SET_ACTIVE_CARD: 'SET_ACTIVE_CARD',
  SAVE_DATA: 'SAVE_DATA',
  ADD_TO_DECK: 'ADD_TO_DECK',
  REMOVE_CARD: 'REMOVE_CARD',
  SAVE_FILTERED_CARDS: 'SAVE_FILTERED_CARDS',
  RESET_FILTER: 'RESET_FILTER'
}
export const changeDetailVis = createAction(ACTIONS.CHANGE_DETAIL_VIS)
export const setActiveCard = createAction(ACTIONS.SET_ACTIVE_CARD)
export const saveData = createAction(ACTIONS.SAVE_DATA)
export const addToDeck = createAction(ACTIONS.ADD_TO_DECK)
export const removeCard = createAction(ACTIONS.REMOVE_CARD)
export const saveFilteredCards = createAction(ACTIONS.SAVE_FILTERED_CARDS)
export const resetFilter = createAction(ACTIONS.RESET_FILTER)

export default ACTIONS
