import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from 'state/modules/counter'

const mapStateToProps = ({ counter }) => ({ count: counter.count })
const bindActions = { increment, decrement }

class Counter extends Component {

  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  };

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
