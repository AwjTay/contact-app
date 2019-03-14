import {createStackNavigator, createAppContainer} from 'react-navigation';
import { StatusBar } from 'react-native';

import ListScreen from "./screens/ListScreen";
import DetailScreen from "./screens/DetailScreen";


const RootNavigator = createStackNavigator({

    List : ListScreen,
    Detail : DetailScreen,

  });


export default createAppContainer(RootNavigator);

