import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  Animated,
} from "react-native";

export default function App() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.header,
            {
              height: scrollY.interpolate({
                inputRange: [10, 160, 185],
                outputRange: [140, 20, 0],
                extrapolate: "clamp",
              }),
              opacity: scrollY.interpolate({
                inputRange: [1, 75, 170],
                outputRange: [1, 1, 0],
                extrapolate: "clamp",
              }),
            },
          ]}
        >
          <Image
            source={require("./src/assets/cam.png")}
            style={styles.cam}
            resizeMode="contain"
          />

          <Animated.Image
            source={require("./src/assets/logo.png")}
            style={[
              {
                width: scrollY.interpolate({
                  inputRange: [0, 120],
                  outputRange: [210, 120],
                  extrapolate: "clamp",
                }),
              },
              styles.logo,
            ]}
            resizeMode="contain"
          />

          <Image
            source={require("./src/assets/send.png")}
            style={styles.send}
            resizeMode="contain"
          />
        </Animated.View>

        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { y: scrollY },
                },
              },
            ],
            { useNativeDriver: false }
          )}
        >
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#101010",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
  },
  cam: {
    width: 30,
    height: 30,
  },
  logo: {
    height: 90,
  },
  send: {
    width: 30,
    height: 30,
  },
  box: {
    height: 300,
    backgroundColor: "#ddd",
    margin: 7,
    borderRadius: 5,
  },
});
