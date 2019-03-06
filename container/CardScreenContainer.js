import { connect } from 'react-redux'
import CardScreen from '../screens/CardScreen'
import { changeDetailVis, setActiveCard, saveData, addToDeck } from '../actions'

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = dispatch => ({
  changeDetailVis: visible => dispatch(changeDetailVis(visible)),
  setActiveCard: activeCard => dispatch(setActiveCard(activeCard)),
  saveData: data => dispatch(saveData(data)),
  addToDeck: () => dispatch(addToDeck())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardScreen)
