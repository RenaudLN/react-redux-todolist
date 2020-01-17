import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state: {visibilityFilter: string}, ownProps: {filter: string}) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}
const mapDispatchToProps = (dispatch: (...args: any[]) => any, ownProps: {filter: string}) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
export default FilterLink