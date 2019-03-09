import { connect } from 'react-redux'
import CardScreen from '../screens/CardScreen'
import {
  changeDetailVis,
  setActiveCard,
  saveData,
  addToDeck,
  saveFilteredCards,
  resetFilter
} from '../actions'

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = dispatch => ({
  changeDetailVis: visible => dispatch(changeDetailVis(visible)),
  setActiveCard: activeCard => dispatch(setActiveCard(activeCard)),
  saveData: data => dispatch(saveData(data)),
  addToDeck: () => dispatch(addToDeck()),
  saveFilteredCards: filtered => dispatch(saveFilteredCards(filtered)),
  resetFilter: filtered => dispatch(resetFilter())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardScreen)
