import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import {TabNavigator} from './TabNavigator'

const RootStack = createNativeStackNavigator()

export type RootStackParamList = {
	Main: undefined
	MyModal: {userId: string; name: string},
    Order:{order:any}
}

export const RootNavigator = () => {
	return (
		<NavigationContainer>
			<RootStack.Navigator>
				<RootStack.Screen name="Main" component={TabNavigator} />
			</RootStack.Navigator>
		</NavigationContainer>
	)
}
