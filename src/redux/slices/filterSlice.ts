import { PayloadAction, createSlice } from "@reduxjs/toolkit" 

type ISort = {
    name: string;
    sortProperty: 'rating' | 'price' | 'title';
}

interface IFilterSlice {
    categoryId: number;
    sort: ISort
}

const initialState: IFilterSlice = {
    categoryId: 0,
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, actions: PayloadAction<number>) {
            state.categoryId = actions.payload
        }
    }
})

export const { setCategoryId } = filterSlice.actions

export default filterSlice.reducer