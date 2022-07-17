import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/outline";
import { SparklesIcon as SparklesIconOutline } from "react-native-heroicons/outline";
import Categories from "../components/Categories";
const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">

        {/* header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
          <Image
            source={{
              uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-700">Deliver Now</Text>
            <Text className="font-bold text-xl">
              Current Location
              <Icons.ChevronDownIcon size={20} />
            </Text>
          </View>
          <Icons.UserIcon size={35} />
        </View>
        {/* search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
          <View className="flex-row flex-1 bg-gray-200 space-x-2 p-3">
            <Icons.SearchIcon color="gray" size={20} />
            <TextInput
              placeholder="Restaurants and Cuisines"
              keyboardType="default"
            />
          </View>
          <Icons.AdjustmentsIcon size={35} />
        </View>
      {/* body */}
      <ScrollView className = 'bg-gray-100 p-4' 
      contentContainerStyle={{
        paddingBottom: 100,
      }}
      >
      {/* category  */}
            <Categories />

      {/* featured row */}
     
     
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
