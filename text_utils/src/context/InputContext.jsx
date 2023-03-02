import React, {useState, createContext} from 'react';

export const InputContext = createContext();

export const InputState = (props) => {
    const [input, setInput] = useState('');
    const [prev, setPrev] = useState('');
    const [operation, setOperation] = useState('');
    function addInput(value){
        setInput(input + value);
    }
    function clear(){
        setInput('')
        setPrev()
    }
    function performOperation(){
        let newValue = parseInt(input);
        switch(operation){
            case '+':
                setInput(newValue+prev)
                break
            case '-':
                setInput(prev - newValue)
                break
            case '*':
                setInput(prev*newValue)
                break;
            case '/':
                setInput(prev/newValue)
                break
            default:
                break
        }
        setPrev()
        setOperation('')
    }
    function setOperationType(whichOperation){
        if(operation !== ''){
            setOperation(whichOperation)
            return
        }
        let value = parseInt(input);
        setPrev(value)
        setOperation(whichOperation)
        setInput("")
    }
    return (
        <InputContext.Provider value={{state:{input,operation,prev}, update:{addInput,clear,performOperation,setOperationType}}}>
            {props.children}
        </InputContext.Provider>
    );
}