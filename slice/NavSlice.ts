import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface navState {
	origin: string
	destination: string
	travelTimeInfo: number
}

const initialState: navState = {
	origin: '',
	destination: '',
	travelTimeInfo: 0
}

export const NavSlice = createSlice({
	name: 'nav',
	initialState,
	reducers: {
		setOrigin: (state, action: PayloadAction<string>) => {
			state.origin = action.payload
		},
		setDestination: (state, action: PayloadAction<string>) => {
			state.destination = action.payload
		}
	}
})

export const {setOrigin} = NavSlice.actions
