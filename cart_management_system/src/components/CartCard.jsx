import React from 'react'
import { removeFromCart } from '../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'
function Card(props) {
  const dispatch = useDispatch();
  const ClickHandler=()=>{
    dispatch(removeFromCart({
      'name': props.name,
      'price': props.price
    }))
  }
  return (
    <div className="c-card">
      <p className="itemName">{props.name}</p>
      <p className="itemPrice">Price: {props.price}</p>
      <button onClick={ClickHandler}>Remove</button>
    </div>
  )
}

export default Card
