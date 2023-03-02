import { createSlice } from '@reduxjs/toolkit'
var productData =  new Array({
    name: '',
    price: 0
}
)
export const counterSlice = createSlice({
  name: 'cart',
  initialState: {
    value: {
        'productList':productData,
        'total': 0,
    },
  },
  reducers: {
    addToCart: (state,action) => {
          state.value.productList.push(action.payload)
          state.value.total += parseInt(action.payload.price)
    },
    removeFromCart: (state,action) => {
        var index = state.value.productList.indexOf(action.payload)
        state.value.productList.splice(index,1);
        state.value.total -= parseInt(action.payload.price)
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer