import React, { Component } from 'react'
import Control from '../components/Control'
import Value from '../components/Value'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.setRandomColor = this.setRandomColor.bind(this)
  }

  setRandomColor() {
    const color = [ 
      Math.floor((Math.random()*55) + 200),
      Math.floor((Math.random()*55) + 200),
      Math.floor((Math.random()*55) + 200)
    ]
    this.props.setColor(color)
  }

  render() {
    const color = this.props.color
    const style = {
      background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    }
    return (
      <div style={style}>
        <Value number={this.props.number}/> 
        <Control
          onInc={this.props.increment}
          onDec={this.props.decrement}
          onRandomColor={this.setRandomColor}
        />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
    color: state.color.color
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)