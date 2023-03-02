import './App.css';
import { useSelector } from 'react-redux';
import Card from './components/CartCard'
import ListItem from './components/ProductListItem'
function App() {
  const cartData = useSelector((state) => state.cart.value)
  const cartItems = cartData.productList;
  const total = cartData.total;
  return (
    <div className="App">
      <div className="cart">
        Cart
        {cartItems.map(item =>{
          if( item.name !== ''){
          return (<Card name={item.name} price={item.price} />)}
          return <></>
        })
        }
        <div className="total">Total Price: {total} rS</div>
      </div>
      <div className="products">
        Products
        <ListItem name="Pen" price="20" />
      </div>
    </div>
  );
}

export default App;
