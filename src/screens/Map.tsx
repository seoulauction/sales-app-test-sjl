import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationProp } from '@react-navigation/native';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const MyPage = ({ navigation }: RouterProps) => {
  useEffect(() => {}, []);

  const moveAdminScreen = () => {
    navigation.navigate('adminScreen');
  };

  return (
    <View>
      <TouchableOpacity onPress={moveAdminScreen}>
        <Text>MapPage</Text>
      </TouchableOpacity>
    </View>
  );
};
export default MyPage;
