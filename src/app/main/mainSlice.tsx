import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { List, platos_type } from '../constans/constans'

interface platosState {
    value: Array<platos_type>
    copy: Array<platos_type>
}

const initialState: platosState = {
    value: List,
    copy: List
}

export const platosSlice = createSlice({
    name: 'platosList',
    initialState,
    reducers: {
        editt: (state, action: PayloadAction<platos_type>) => {
            var position = null
            state.value.map((item) => {
                if (item.id === action.payload.id) {
                    position = state.value.indexOf(item)
                }
            })
            if (position !== null) {
                state.value[position] = action.payload
                state.copy[position] = action.payload
            }
        },
        deletee: (state, action: PayloadAction<number>) => {
            var arr: Array<platos_type> = []
            state.value.map((item) => {
                if (item.id != action.payload) {
                    arr.push(item)
                }
            })
            state.value = arr
            state.copy = arr
        },
        search: (state, action: PayloadAction<string>) => {
            var arr: Array<platos_type> = []
            state.value = state.copy
            state.value.map((item) => {
                if (item.name.toLowerCase().includes(action.payload.toLowerCase())) {
                    arr.push(item)
                }
            })
            state.value = arr
        }
    }
})


export const { editt, deletee, search } = platosSlice.actions;

export const platosList = (state: any) => state.platos.value;

export default platosSlice.reducer;