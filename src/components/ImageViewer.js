import { StyleSheet, Image } from "react-native";
import React, { useContext } from "react";

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  console.log("image vierwer Image source:", imageSource);

  return (
    <Image
      source={imageSource}
      style={styles.image}
      onError={(e) => console.log(e.nativeEvent.error)}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 350,
    borderRadius: 12,
  },
});
