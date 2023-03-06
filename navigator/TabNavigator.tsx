import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react'
import {CustomerScreen} from '../screens/CustomerScreen'
import { OrdersScreen } from '../screens/OrdersScreen'

export const TabNavigator = () => {
	const Tab = createBottomTabNavigator()
	return (
		<Tab.Navigator>
			<Tab.Screen name="CustomerScreen" component={CustomerScreen} />
            <Tab.Screen name="CustomerScreen" component={OrdersScreen} />
		</Tab.Navigator>
	)
}
