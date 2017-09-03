import React from 'react'
import { PropTypes } from 'prop-types'

const propTypes = {
  onInc: PropTypes.func,
  onDec: PropTypes.func,
  onRandomColor: PropTypes.func
}

function createWarning(funcName) {
  return () => console.warn(funcName + 'is not defined')
}

const defaultProps = {
  onInc: createWarning('onInc'),
  onDec: createWarning('onDec'),
  onRandomColor: createWarning('onRandomColor')
}

function Control({onInc, onDec, onRandomColor}) {
  return (
    <div>
      <button onClick={onInc}>+</button>
      <button onClick={onDec}>-</button>
      <button onClick={onRandomColor}>Random Color</button>
    </div>
  )
}

Control.propTypes = propTypes
Control.defaultProps = defaultProps

export default Control