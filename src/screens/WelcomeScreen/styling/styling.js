import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const LogoContainer = styled.View`
  padding-top: 30px;
  padding-left: 30px;
`;

export const FreakContainer = styled.View`
  background-color: black;
  flex: 1;
`;
export const StyledText = styled.Text`
  color: #fff;
`;

export const ImageFreak = styled.ImageBackground`
  flex: 1;
`;

export const WelcomeScreenStyles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#000',
    flex: 1,
  },

  spotifyButtonView: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
    flex: 1,
    justifyContent: 'flex-end',
  },

  spotifyButton: {
    flexDirection: 'row',
    backgroundColor: '#EE549D',
    borderRadius: 30,
    width: '100%',
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    // fontFamily: 'Sofia Pro', Set up fonts
  },
});
