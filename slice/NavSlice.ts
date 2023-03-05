import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface navState {
	origin: string
	destination: string
	travelTimeInfo: number
	nav?: string
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
		setOrigin: (state, action: PayloadAction<string>): void => {
			state.origin = action.payload
		},
		setDestination: (state, action: PayloadAction<string>): void => {
			state.destination = action.payload
		},
		setTravelTimeInformation: (state, action: PayloadAction<number>): void => {
			state.travelTimeInfo = action.payload
		}
	}
})

export const {setOrigin, setDestination, setTravelTimeInformation} =
	NavSlice.actions

//Selectors

export const selectOrigin = (state: navState) => state.nav.origin
