import {View, Text, SafeAreaView, Image} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';

import {avatar} from '../assets';
import {book} from '../assets';
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* {First Section} */}

      <View className="flex-row mt-8 items-center space-x-2 px-6 justify-between">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Image
            source={avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
        <View className="w-16 h-16 rounded-md items-center justify-center cursor-pointer">
          <Image
            source={book}
            className="w-full h-full rounded-md object-cover "
          />
        </View>
      </View>

      {/* Second Section */}
      <View>
        <View className="flex-row justify-around px-6 mt-8 ">
          <Icon name="bonfire" size={30} color={'blue'} />
          <Icon name="bed-outline" size={30} color={'blue'} />
          <Icon name="restaurant" size={30} color={'blue'} />
          <Icon name="planet" size={30} color={'blue'} />
          <Icon name="fast-food" size={30} color={'blue'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
