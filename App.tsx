// import Header from 'navigation/Header';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Main from 'Main';
import Login from 'screens/Login';
import Map from 'screens/Map';
import MyPage from 'screens/MyPage';
import { MD3LightTheme, useTheme, PaperProvider } from 'react-native-paper';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const Theme = {
  ...MD3LightTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#fc6d00',
    text: '#fff',
    textLight: '#fff',
    textDark: '#333',
  },
};

export type AppTheme = typeof Theme;
export const useAppTheme = () => useTheme<AppTheme>();

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  MyPage: undefined;
  Signin: undefined;
  Login: undefined;
  Map: undefined;
};

export default function App() {
  const headerOptions: NativeStackNavigationOptions = {
    title: 'TrekTrack',
    headerShown: true,
    headerStyle: { backgroundColor: Theme.colors.primary },
    headerTintColor: Theme.colors.textLight,
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 25,
    },
  };
  return (
    <PaperProvider theme={Theme}>
      <NavigationContainer theme={Theme}>
        <Stack.Navigator initialRouteName="Home" screenOptions={headerOptions}>
          <Stack.Screen name="Home" component={Main} />
          <Stack.Screen name="Login" component={Login} options={{ title: 'LOGIN', headerShown: false }} />
          <Stack.Screen name="MyPage" component={MyPage} options={{ title: 'MyPage' }} />
          <Stack.Screen name="Map" component={Map} options={{ title: 'Map' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
