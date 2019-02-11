import { connect } from 'react-redux'
import DeckScreen from '../screens/DeckScreen'

const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeDetailVis: visible => dispatch(changeDetailVis(visible))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckScreen)
