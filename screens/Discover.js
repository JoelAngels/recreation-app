import {View, Text, SafeAreaView} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Discover = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="bg-black flex-1 relative">
      <View className="flex-row items-center  px-8">
        <View>
          <Icon name="book" size={30} color={'blue'} />
          <Text className="text-[30px] text-[#35D877] font-bold">PRAGUE</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Discover;
