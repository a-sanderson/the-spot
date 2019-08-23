import {createStackNavigator} from "react-navigation"
import HomeScreen from "../screens/HomeScreen.js"
import SpotResult from "../screens/SpotResult.js";
import DashboardScreen from "../screens/DashboardScreen.js"
import DashboardScreen2 from "../screens/DashboardScreen2.js"


const HomeStack = createStackNavigator(
    {
      HomeScreen: HomeScreen,
      SpotResult: SpotResult,
      DashboardScreen: DashboardScreen,
      DashboardScreen2: DashboardScreen2
    },
    {
      initialRouteName: "HomeScreen"
    }
  );

  export default HomeStack