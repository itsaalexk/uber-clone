import {StatusBar} from 'expo-status-bar'
import {Text, View} from 'react-native'
import {TailwindProvider} from 'tailwind-rn'
import {CustomerScreen} from './screens/CustomerScreen'
import utilities from './tailwind.json'

export default function App() {
	return (
		//@ts-ignore - Type '{ children: Element; utilities: {}; }' is not assignable to type 'IntrinsicAttributes & Props'.

		<TailwindProvider utilities={utilities}>
			<View>
				<Text>Hola</Text>
				<CustomerScreen />
				<StatusBar style="auto" />
			</View>
		</TailwindProvider>
	)
}
