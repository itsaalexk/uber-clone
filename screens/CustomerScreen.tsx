import React from 'react'
import {Text, View} from 'react-native'
import {useTailwind} from 'tailwind-rn/dist'

export const CustomerScreen = () => {
	const tw = useTailwind()
	return (
		<View>
			<Text style={tw('text-blue-600')}>Customer Screen</Text>
		</View>
	)
}
