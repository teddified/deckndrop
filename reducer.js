import ACTIONS from './actions'

const initialState = {
  cards: null,
  detailVisible: false,
  activeCard: null,
  deck: null
}

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ACTIONS.CHANGE_DETAIL_VIS:
      return {
        ...state,
        detailVisible: action.payload
      }

    case ACTIONS.SET_ACTIVE_CARD:
      return {
        ...state,
        activeCard: action.payload
      }

    case ACTIONS.SAVE_DATA:
      return {
        ...state,
        cards: action.payload
      }
    case ACTIONS.ADD_TO_DECK:
      if (state.deck && state.deck[state.activeCard.name]) {
        if (state.deck[state.activeCard.name].count < 4) {
          return {
            ...state,
            deck: {
              ...state.deck,
              [state.activeCard.name]: {
                ...state.deck[state.activeCard.name],
                count: state.deck[state.activeCard.name].count + 1
              }
            }
          }
        } else {
          return state
        }
      } else {
        return {
          ...state,
          deck: {
            ...state.deck,
            [state.activeCard.name]: {
              count: 1,
              url: state.activeCard.image_uris.small
            }
          }
        }
      }
    default:
      return state
  }
}
