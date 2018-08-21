import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	StyleSheet
} from 'react-native';

export default class MainView extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			to_convert: "",
			converted: "0.00",
			direction: "bsf-bss"
		}
	}
	convert(){
		this.setState({
			converted: this.state.to_convert
		});
	}
	render(){
		return(
			<View style={MainStyle.container}>
				<View style={MainStyle.area_inputs}>
					<TouchableOpacity>
						
					</TouchableOpacity>
					<Text style={MainStyle.label_inputs}>BsF</Text>
					<TextInput 
						value={this.state.to_convert}
						style={MainStyle.text_inputs}
						onChangeText={
							text => {
								this.setState({
									to_convert: text
								})
							}
						}
						placeholder="0.00"
						keyboardType="numeric"/>
					<Text style={MainStyle.label_inputs}>BsS</Text>
					<TextInput 
						value={this.state.converted}
						style={MainStyle.text_inputs}
						keyboardType="numeric"
						editable={false}/>

					<TouchableOpacity
						onPress={() => {
							this.convert()
						}}>
						<Text style={MainStyle.label_inputs}>Convertir</Text>
					</TouchableOpacity>
				</View>
			</View>
			);
	}
}

const MainStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#294F6D'
    },
    area_logo: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    area_inputs: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_inputs: {
        height: 40,
        width: 300,
        fontSize: 15,
        marginBottom: 10,
        color: 'white',
        backgroundColor: '#123652',
    },
    label_inputs: {
        fontSize: 18,
        textAlign: 'center',
        color: '#718EA4',
    },
    button: {
        marginTop: 25,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        width: 150,
        height: 40,
        justifyContent: 'center',
        backgroundColor: '#123652'
    }
});