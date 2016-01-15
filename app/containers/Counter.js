import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
  initialState as initialCounterState,
  getCount,
  increment,
  decrement
} from 'state/modules/counter'

const mapStateToProps = ({ counter }) => ({ count: counter.count })
const bindActions = { increment, decrement, getCount }

class Counter extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  };

  // it must be async actions (of type CALL_API)
  // serverside will render when this action will be complete
  static readyOnActions = (dispatch, location, params) => [
		() => dispatch(getCount())
	];

  componentDidMount() {
    if (initialCounterState.count === this.props.count) {
      this.props.getCount()
    }
  }

  inc = () => this.props.increment();
  dec = () => this.props.decrement();

  render() {
    const { count } = this.props
    return (
      <div className="Counter">
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
        {count}
      </div>
    )
  }
}


export default connect(mapStateToProps, bindActions)(Counter)
