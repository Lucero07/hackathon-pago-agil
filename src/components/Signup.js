import React, { Component } from 'react';

import {
	Button,
	TextInput,
	View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Signup extends Component {
	goToValcodigo() {
		Actions.validarcodigo();
	}

	render() {
		return (
			<View>
				<TextInput
					placeholder="Ingresa tu número"
					label = {+52}
					keyboardType="numeric"
					maxLength={10} />
				<Button 
					onPress={this.goToValcodigo}
					title="Enviar" 
				/>
			</View>
		)
	}
}
