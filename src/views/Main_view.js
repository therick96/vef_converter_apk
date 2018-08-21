import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	Picker,
	StyleSheet
} from 'react-native';

export default class MainView extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			to_convert: "",
			converted: "0.00",
			p_convert: 0,
			p_converted: 1,
		}
	}
	currencyFormat (num) {
    	return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
	}
	convert(){
		let conversion = 0;
		if ( this.state.p_convert < this.state.p_converted){
			conversion = this.state.to_convert / 100000
		}else if ( this.state.p_convert == this.state.p_converted){
			conversion = this.state.to_convert * 1
		}else{
			conversion = this.state.to_convert * 100000
		}
		
		this.setState({
			converted: String(this.currencyFormat(conversion))
		});
	}
	render(){
		return(
			<View style={MainStyle.container}>
				<View style={MainStyle.area_logo}>
				</View>
				<View style={MainStyle.area_inputs}>
					<View style={MainStyle.inputs_areas}>
						<Picker
							style={[ MainStyle.pickerBox]}
							selectedValue={this.state.p_convert}
	                        mode="dropdown"
	                        onValueChange={(item) => {
	                            this.setState({
	                                p_convert: item
	                            })
	                        }}>
							<Picker.Item style={MainStyle.pickerStyle} label="BsF" value={0}/>
	                        <Picker.Item style={MainStyle.pickerStyle} label="BsS" value={1}/>
						</Picker>
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
					</View>
					<View style={MainStyle.inputs_areas}>
						<Picker
							style={[ MainStyle.pickerBox]}
							selectedValue={this.state.p_converted}
	                        mode="dropdown"
	                        onValueChange={(item) => {
	                            this.setState({
	                                p_converted: item
	                            })
	                        }}>
							<Picker.Item style={MainStyle.pickerStyle} label="BsF" value={0}/>
	                        <Picker.Item style={MainStyle.pickerStyle} label="BsS" value={1}/>
						</Picker>
						<TextInput 
							value={this.state.converted}
							style={MainStyle.text_inputs}
							keyboardType="numeric"
							editable={false}/>
					</View>

					<TouchableOpacity
						style={[MainStyle.button, {marginTop: 10, marginBottom: 30}]}
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
        backgroundColor: '#003049'
    },
    area_logo: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputs_areas: {
    	height:50,
    	flex: 2,
    	flexDirection: 'row', 
    },
    area_inputs: {
    	paddingHorizontal: 15,
        flex: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_inputs: {
        height: 80,
        flex: 4,
        paddingLeft: 10,
        fontSize: 20,
        marginBottom: 10,
        color: 'white',
        backgroundColor: '#123652',
    },
    label_inputs: {
        fontSize: 25,
        textAlign: 'center',
        color: '#fcbf49',
    },
    button: {
        marginTop: 25,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        width: 150,
        height: 60,
        justifyContent: 'center',
        backgroundColor: '#d62828'
    },
    pickerStyle: {
        backgroundColor: '#718EA4',
        height: 50, 
        width: 100,
        fontSize: 35,
        alignSelf: 'center',
    },
    pickerBox: {
        backgroundColor: '#718EA4',
        height: 80,
        flex: 1
    },
});