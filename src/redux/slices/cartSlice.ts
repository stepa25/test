import { PayloadAction, createSlice } from "@reduxjs/toolkit" 

export type ICartItem = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    count?: number;
}

interface ICartSlice {
    totalPrice: number;
    items: ICartItem[];
}

const initialState: ICartSlice = {
    totalPrice: JSON.parse(localStorage.getItem('totalPrice')) || 0,
    items: JSON.parse(localStorage.getItem('cart')) || []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<ICartItem>){
            const findItem = state.items.find(obj => obj.id === action.payload.id)

            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
            })
            }
            state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
        },
        minusItem(state, action: PayloadAction<ICartItem>){
            const findItem = state.items.find(item => item.id === action.payload.id)
            
            if (findItem.count <= 1) {
                state.items = state.items.filter(item => item.id !== action.payload.id)
                state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
            }
            if (findItem) {
                findItem.count--
            }

            state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
        },

        removeItem(state, action: PayloadAction<ICartItem>){
            state.items = state.items.filter(item => item.id !== action.payload.id)
            state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
        },
        clearItems(state){
            state.items = []
            state.totalPrice = 0
        }
    }
})

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions

export default cartSlice.reducer