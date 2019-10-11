/**
 * @format
 */
import {AppRegistry} from 'react-native';
import FreakLikeMe from './src/navigators/FreakLikeMe';
import {name as appName} from './app.json';
import axios from 'axios';

axios.defaults.baseURL = 'http://www.agecold.ru:8888';

AppRegistry.registerComponent(appName, () => FreakLikeMe);
