import React from 'react'
import { addToCart } from '../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'
function ProductListItem(props) {
    const dispatch = useDispatch();
    const ClickHandler = () =>{
        dispatch(addToCart({
            name: props.name,
            price: props.price
        }))
    }
  return (
    <div className='c-item'>
        <p className="itemName">{props.name}</p>
        <p className="itemPrice">Price: {props.price} rS</p>
        <button onClick={ClickHandler}>Add</button>
    </div>
  )
}

export default ProductListItem
