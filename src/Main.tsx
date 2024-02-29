import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Button, Avatar, Text } from 'react-native-paper';
import { Theme, type AppTheme, RootStackParamList } from '../App';
import { StackScreenProps } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';
import PrimaryButton from 'components/PrimaryButton';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

export default function Main({ navigation, route }: Props) {
  const { colors } = useTheme();
  return (
    <GestureHandlerRootView style={styles.container}>
      <Avatar.Image
        size={260}
        source={require('./assets/logo.png')}
        style={{ backgroundColor: 'transparent', borderRadius: 0 }}
      />
      <PrimaryButton
        text="산책하러 가기"
        onPress={(e) => {
          e.preventDefault();
          navigation.navigate('Login');
        }}
        style={{ marginTop: 40 }}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
