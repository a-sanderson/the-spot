import React from "react"
import {createSwitchNavigator} from "react-navigation"
import SignupScreen from "../screens/SignupScreen.js"
import SigninScreen from "../screens/SigninScreen.js"
import LoginScreen from "../screens/LoginScreen.js"
import DashboardScreen from "../screens/DashboardScreen.js"
import ProfileScreen from "../screens/ProfileScreen.js"

const AuthStack = createSwitchNavigator(
    {
      LoginScreen: LoginScreen,
      SignupScreen: SignupScreen,
      SigninScreen: SigninScreen,
      DashboardScreen: DashboardScreen,
      ProfileScreen: ProfileScreen
    },
    {
      initialRouteName: "LoginScreen"
    }
  );

  export default AuthStack