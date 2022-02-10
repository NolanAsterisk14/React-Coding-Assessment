import React, { useState } from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import slideData from "./SlideData";
import SlideItem from "./SlideItem";
import { styles, ITEM_WIDTH, SLIDER_WIDTH } from "./Styles";

const SlideFunc = () => {
    const [index, setIndex] = React.useState(0)
    const isSlide = React.useRef(null)
    const nav = useNavigation();
    return (
        <View>
            <Carousel 
                layout="default"
                ref= {isSlide}
                data= {slideData}
                renderItem= {SlideItem}
                sliderWidth= {SLIDER_WIDTH}
                itemWidth= {ITEM_WIDTH}
                onSnapToItem= {(index) => setIndex(index)}
                activeSlideOffset= {100}
                swipeThreshold= {60}
                lockScrollWhileSnapping= {true}
                useScrollView= {true}
                contentContainerCustomStyle= {{alignSelf: "flex-end"}}
                loop= {true}
                autoplay= {true}
                autoplayInterval = {10000}
            />
            <TouchableOpacity style={[styles.button, {backgroundColor: "#2781ff"}]} onPress={() => nav.navigate("SignUp")}>
                <Text style={{color: "#fff"}}>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button , {backgroundColor: "#424242", marginTop: 10}]} onPress={() => nav.navigate("LogIn")}>
                <Text style={{color: "#fff"}}>LOG IN</Text>
            </TouchableOpacity>
            <Pagination
                dotsLength={slideData.length}
                activeDotIndex={index}
                carouselRef={isSlide}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: "#07E"
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
            />
        </View>
    )
}

export default SlideFunc