import ACTIONS from './actions'

const initialState = {
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
      if (action.payload) {
        if (state.deck[action.payload.name].count < 4) {
          return {
            ...state,
            deck: {
              ...state.deck,
              [action.payload.name]: {
                ...state.deck[action.payload.name],
                count: state.deck[action.payload.name].count + 1
              }
            }
          }
        } else {
          return state
        }
      } else {
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
                url: state.activeCard.image_uris.small,
                name: state.activeCard.name
              }
            }
          }
        }
      }
      break
    case ACTIONS.REMOVE_CARD:
      if (state.deck[action.payload.name].count > 1) {
        return {
          ...state,
          deck: {
            ...state.deck,
            [action.payload.name]: {
              ...state.deck[action.payload.name],
              count: state.deck[action.payload.name].count - 1
            }
          }
        }
      } else {
        const tempState = state
        delete tempState.deck[action.payload.name]
        return {
          ...tempState,
          deck: {
            ...tempState.deck
          }
        }
      }

    default:
      return state
  }
}
