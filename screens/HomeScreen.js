import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';

import {avatar} from '../assets';
import {book} from '../assets';
import {green} from '../assets';

import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

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
        <View className="flex-row justify-around px-6 mt-5 ">
          <View>
            <Icon name="bonfire" size={30} color={'blue'} />
          </View>
          <Icon name="bed-outline" size={30} color={'blue'} />
          <View className="bg-black w-12 h-12 rounded-md items-center justify-center">
            <Icon name="restaurant" size={30} color={'#35D877'} />
          </View>

          <Icon name="planet" size={30} color={'blue'} />
          <Icon name="fast-food" size={30} color={'blue'} />
        </View>
      </View>

      {/* Third Section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#35D877] text-[30px]">Adventure in our DNA</Text>

        <Text className="text-[#3C6072] text-base">
          A collection of attractive and Unique Slogans companies. That can
          attract and convey the right message to your potential customers.
        </Text>
      </View>

      {/* Image Container */}

      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={green}
          className="w-full h-full object-cover mt-20"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Discover')}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#35D877] rounded-full items-center justify-center">
          <Animatable.View
            animation={'pulse'}
            easing="ease-in-out"
            iterationCount={'infinite'}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#35D877]">
            <Text className="text-gray-50 text-[25px] font-semibold">Join</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
