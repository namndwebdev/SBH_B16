import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listProduct: []  // []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action)=>{
        // {id, price, slug, name, quantity}
        let {id, price, slug, name, quantity, quantityAvailable} = action.payload
        let productFinded = state.listProduct.find(item=> {
            return item.id === id
        })

        if(productFinded){
            // da co san pham id nay trong gio
            if(productFinded.quantity + quantity >= quantityAvailable){
              productFinded.quantity = quantityAvailable
            }else{
              productFinded.quantity += quantity
            }
        }else{
            if(quantity >= quantityAvailable){
              quantity = quantityAvailable
            }
            state.listProduct.push({id, price, slug, name, quantity, quantityAvailable})
        }
    },
    updateProductCart: (state, action)=>{
        let {id, quantityAvailable, quantity} = action.payload
        let productFinded = state.listProduct.find(item=> {
          return item.id === id
        })

        if(productFinded){
            // da co san pham id nay trong gio
            if(quantity >= quantityAvailable){
              quantity = quantityAvailable
            }
            productFinded.quantity = quantity
        }
      
    },
    deleteProduct: (state, action)=>{
      const {id} = action.payload
      state.listProduct = state.listProduct.filter(item=>{
        return item?.id !== id
      })
    },
    clearCart: (state)=>{
      state.listProduct = []
    } 
  },
})

// Action creators are generated for each case reducer function
export const { addCart, updateProductCart, deleteProduct, clearCart } = cartSlice.actions

export default cartSlice.reducer