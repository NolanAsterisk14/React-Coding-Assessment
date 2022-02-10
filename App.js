import { StatusBar } from "expo-status-bar";
import { Text, View, Button, Image } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import  SlideFunc  from "./SlideFunc";
import { styles } from "./Styles";

const LandingScreen = () => {
  const nav = useNavigation();
  let img = require("./assets/cod_background.jpg");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.imageContainer}>
        <Image style={styles.backgroundImage} source={img}/>
      </View>
      <SlideFunc/>
    </View>
  );
};

const SignUpScreen = () => {
  return (
  <View style={styles.container}>

  </View>
  );
};

const LogInScreen = () => {
  return (
  <View style={styles.container}>

  </View>
  );
};

export const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}}/>
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerTitle: "", headerTintColor: "#fff", headerStyle: {backgroundColor: "#000"}}}/>
      <Stack.Screen name="LogIn" component={LogInScreen} options={{headerTitle: "", headerTintColor: "#fff", headerStyle: {backgroundColor: "#000"}}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
  



