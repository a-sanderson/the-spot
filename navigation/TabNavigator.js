import {createAppContainer,createBottomTabNavigator } from "react-navigation"
// import AuthStack from "./navigation/AuthStack"
import HomeStack from "./HomeStack.js"
import ProfileStack from "./ProfileStack.js"
import SpotStack from "./SpotNavigator.js"

const MainNav = createAppContainer(createBottomTabNavigator(
    {
      // App: AppStack
      // Login: AuthStack,
      Home: HomeStack,
      Spots: SpotStack,
      Profile: ProfileStack
  
    },
    {
      initialRouteName: 'Profile',
    }
  ));

  export default MainNav
  