import { FC, useRef } from 'react';
import { View, Text } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import LottieView from 'lottie-react-native';

const HomeScreen: FC = () => {
  const animation = useRef(null);

  return (
    <View className="w-full flex py-4 items-center justify-center bg-white">
      <View className="flex">
        <Text>Home Screen</Text>
      </View>

      <View className="w-full flex items-center justify-center bg-red-300">
        <Text>Icon</Text>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
      </View>

      <View className="w-full flex items-center justify-center">
        <Text>Lottie</Text>

        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 200,
            backgroundColor: '#eee',
          }}
          source={require('@assets/lottie/SampleLoading.json')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
