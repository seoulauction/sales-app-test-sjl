import { TouchableOpacity, StyleSheet, View, TextStyle, GestureResponderEvent } from 'react-native';
import { Text } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';

type Props = {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: TextStyle;
  width?: number;
  height?: number;
};

const PrimaryButton = ({ text, style, width, height, onPress }: Props) => {
  const { colors } = useTheme();

  return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, { width: width || 230, height: height || 50, backgroundColor: colors.primary, ...style }]}
      >
        <Text style={[styles.text, { color: colors.text }]}>{text}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    padding: 15,
    borderRadius: 100,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
export default PrimaryButton;
