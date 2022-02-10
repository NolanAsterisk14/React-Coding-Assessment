import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Styles";

const SlideItem = ({item, index}) => {
    return (
    <View style={styles.slideBox} key={index}>
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
    )
}

export default SlideItem

