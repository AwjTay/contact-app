import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import titleCase from "title-case";

class DetailScreen extends React.Component {

	static navigationOptions = ({navigation}) => ({

		title : navigation.getParam('contact').name
	});

	constructor(props) {
		super(props);	
	}

	render() {
		const details = this.props.navigation.getParam('contact');
		const source = details.picture;
		const pronoun = details.gender === "female" ? <Text>She</Text> : <Text>He</Text>;
		return (
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={{uri : source}} />
				</View>
				<Text style={ styles.infoItem }>{`${details.name} is ${titleCase(details.gender)}.`}</Text>
				<Text style={ styles.infoItem }>{ pronoun } {`lives at ${details.address}.`}</Text>
				<Text style={ styles.infoItem }>{ pronoun } {`works at ${details.company}.`}</Text>
				<Text style={ styles.infoItem }>{ details.gender === "male" ? "His" : "Her" } {`favourite film is ${details.filmName}.`}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({

	container : {
		paddingTop : 10,
		
	},

	imageContainer : {
		alignItems : "center",
		justifyContent : "center",
	},

	image : {
  	width : 200,
  	height : 200,
  	marginBottom : 10,

  },

  infoItem : {
  	fontSize : 18,
  	marginVertical : 5,
  	marginLeft : 10,
  	marginRight : 10,
  }

});

export default DetailScreen;
