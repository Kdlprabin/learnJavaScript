import React from 'react'
import '../style/Calculator.css'
import CustomButton from '../components/CustomButton'
import {useContext} from 'react'
import { InputContext } from '../context/InputContext'
function Calculator() {
  const a = useContext(InputContext);
  return (
    <div className='Board'>
      <div className="input">
          <div className='prev'>{a.state.prev}</div>
          <div className="opertion">{a.state.operation}</div>
          <div className="inputValue">{a.state.input}</div>
      </div>
      <div className="c-buttons">
        <div className="row">
            <CustomButton name={'1'} />
            <CustomButton name={'2'} />
            <CustomButton name={'3'} />
            <CustomButton name={'+'} />
        </div>
        <div className="row">
            <CustomButton name={'4'} />
            <CustomButton name={'5'} />
            <CustomButton name={'6'} />
            <CustomButton name={'-'} />
        </div>
        <div className="row">
            <CustomButton name={'7'} />
            <CustomButton name={'8'} />
            <CustomButton name={'9'} />
            <CustomButton name={'*'} />
        </div>
        <div className="row">
            <CustomButton name={'0'} />
            <CustomButton name={'Clear'} />
            <CustomButton name={'/'} />
            <CustomButton name={'='} />
        </div>
      </div>
    </div>
  )
}

export default Calculator
