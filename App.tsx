import {StatusBar} from 'expo-status-bar'
import {StyleSheet, Text, View} from 'react-native'
import {Provider} from 'react-redux'
import {store} from './store/store'

export default function App() {
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<Text style={styles.text}>Demo de React Native</Text>
				<StatusBar style="auto" />
			</View>
		</Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		color: 'white',
		fontFamily: 'consolas',
		fontSize: 20
	}
})
