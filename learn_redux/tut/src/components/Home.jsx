import React from 'react'

function Home(props) {
  console.warn("props".props)
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
            <img src="https://tse4.mm.bing.net/th?id=OIP.8sTXr-afJgaaFCsyNntsfgHaHa&pid=Api&P=0" alt="" />
        </div>
        <div className="text-wrapper item">
            <span>
                I-myPhone
            </span>
            <span>Price : $10.00</span>
        </div>
        <div className="btn-wrapper item">
            <button>Add to cart</button>
        </div>
      </div>
      <div>The cart is empty</div>
    </div>
  )
}

export default Home