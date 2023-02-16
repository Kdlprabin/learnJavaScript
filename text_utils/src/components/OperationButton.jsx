import React,{useContext} from 'react'
import '../style/Calculator.css'
import {InputContext} from '../context/InputContext'
function OperationButton(props) {
  const a = useContext(InputContext);
  var name = props.name;
  const ClickHandler = ()=>{
    console.log(a.state)
    a.update(name)
    console.log(a.state)
  }
  return (
     <button onClick={ClickHandler} className='c-button'>
      {name}
    </button>
  )
}

export default OperationButton
