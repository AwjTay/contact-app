import React from 'react';
import { StyleSheet, Text, FlatList, TouchableHighlight, View, ActivityIndicator } from 'react-native';
import {NavigationOptions} from "react-native";
import axios from "axios";

const API_URL = "https://robocontacts.herokuapp.com/api/contacts?random";

class ListScreen extends React.Component {

	static navigationOptions = {
		title : "Contacts",
		headerStyle : {
			backgroundColor : '#2a3daa',
			color : "white",
		}
	}

	constructor(props) {
		super(props);

		this.state = {
			result : [],
			fetching : false,
		}

		this.renderItem = this.renderItem.bind(this);
		this.renderSeparator = this.renderSeparator.bind(this);
		this.keyExtractor = this.keyExtractor.bind(this);
		this.getDetail = this.getDetail.bind(this);

	}

	componentDidMount () {
		this.setState({ fetching : !this.state.fetching})

		axios.get(API_URL).then(({ data }) => {
		this.setState({ result : data, fetching : false });
		});
	}

	renderItem({item}) {

		return (
			<TouchableHighlight
				onPress={ () => this.getDetail(item) } 
				style={ styles.container } 
				underlayColor="#e4e4e4">
				<Text style={ styles.listitem }>
					{ item.name }
				</Text>
			</TouchableHighlight>
		);
	}

	renderSeparator() {

	    const style = { height: 1, backgroundColor: '#777', marginLeft : 10 };

	    return <View style={style} />;
  	}

   keyExtractor(item, index) {

	    return `${index}`;  
  	}

  	getDetail(item) {
    	this.props.navigation.navigate('Detail', {
    	contact : item
    });
  }

	render () {

		const contacts = this.state.result

		return (

			this.state.fetching ? <ActivityIndicator size="large" color="#9400D3" /> :

			<FlatList 
				data={ contacts } 
				renderItem={ this.renderItem }
				keyExtractor={ this.keyExtractor }
				ItemSeparatorComponent={ this.renderSeparator }
			/>
		)
	}
}

const styles = StyleSheet.create({

	container : {
		paddingTop : 10,
		alignItems : "center",
    	justifyContent : "center",
	},

	listitem : {
		height : 50,
		fontSize : 18,
		backgroundColor : '#fff',
	},
});

export default ListScreen;