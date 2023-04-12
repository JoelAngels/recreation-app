import {View, Text, SafeAreaView} from 'react-native';
import React, {useLayoutEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <SafeAreaView>
      <View>
        <Text className="font-bold, text-center">
          Coding my mind to be the best coder ever
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
