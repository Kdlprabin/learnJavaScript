import React,{useContext,lazy} from 'react'
import '../style/Calculator.css'
function CustomButton(props) {
  var name = props.name;
  const InputContext = lazy(()=>{import('../context/InputContext').then(module=>{return{default:module.InputContext}})});
  const ClickHandler = ()=>{
    const a = useContext(InputContext);
    switch(name){
      case 'Clear':
        a.update.clear('')
        break
      case '+':
        a.update.setOperationType(name)
        break
      case '-':
         a.update.setOperationType(name)
        break
      case '/':
        a.update.setOperationType(name)
        break
      case '*':
        a.update.setOperationType(name)
        break
      case '=':
        a.update.performOperation();
        break
      default:
        a.update.addInput(name)
    }
  }
  return (
     <button onClick={ClickHandler} className='c-button'>
      {name}
    </button>
  )
}

export default CustomButton
