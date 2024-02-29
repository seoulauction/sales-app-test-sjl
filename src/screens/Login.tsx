import { StyleSheet, Image, ImageBackground } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import { RootStackParamList } from '../../App';
import { StackScreenProps } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as AppleAuthentication from 'expo-apple-authentication';
import { useTheme } from '@react-navigation/native';

type Props = StackScreenProps<RootStackParamList, 'Login'>;

const Login = ({ navigation, route }: Props) => {
  const { colors } = useTheme();

  return (
    <GestureHandlerRootView style={[styles.container]}>
      <ImageBackground blurRadius={20}>
        <Text style={[styles.title]}>Login to your account </Text>
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={50}
          style={{ width: 300, height: 50, marginTop: 100 }}
          // style={styles.button}
          onPress={async () => {
            try {
              const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                  AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                  AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ],
              });
              console.log('signed in credential ::', credential);
              // signed in
            } catch (e: any) {
              console.log('signed in ERROR ::', e, e?.code);
              if (e?.code && e?.code === 'ERR_REQUEST_CANCELED') {
                // handle that the user canceled the sign-in flow
              } else {
                // handle other errors
              }
            }
          }}
        />
        <Image
          source={require('../assets/login_google.png')}
          style={{ width: 300, height: 50, marginTop: 20, resizeMode: 'stretch' }}
        />
      </ImageBackground>
    </GestureHandlerRootView>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    width: '90%',
    marginHorizontal: 20,
    marginVertical: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});
