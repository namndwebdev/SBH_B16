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
        const {id, price, slug, name, quantity} = action.payload
        let productFinded = state.listProduct.find(item=> {
            return item.id === id
        })

        if(productFinded){
            // da co san pham id nay trong gio
            productFinded.quantity += quantity
        }else{
            state.listProduct.push({id, price, slug, name, quantity})
        }
    },
    updateProductCart: (state, action)=>{
        const {id, price, slug, name, quantity} = action.payload
        let productFinded = state.listProduct.find(item=> {
          return item.id === id
        })

        if(productFinded){
            // da co san pham id nay trong gio
            productFinded.quantity = quantity
        }
      
    },
    deleteProduct: (state, action)=>{
      const {id} = action.payload
      state.listProduct = state.listProduct.filter(item=>{
        return item?.id !== id
      })
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCart } = cartSlice.actions

export default cartSlice.reducer