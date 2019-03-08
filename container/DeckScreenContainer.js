import { connect } from 'react-redux'
import DeckScreen from '../screens/DeckScreen'
import { removeCard, addToDeck } from '../actions'

const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeCard: card => dispatch(removeCard(card)),
    addToDeck: item => dispatch(addToDeck(item))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckScreen)
