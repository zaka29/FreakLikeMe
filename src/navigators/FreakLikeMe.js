import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import WelcomeScreen from '../screens/WelcomeScreen/main';
import HomeScreen from '../screens/HomeScreen/main';

const FreakLikeMeNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'Welcome',
  },
);

export default createAppContainer(FreakLikeMeNavigator);
