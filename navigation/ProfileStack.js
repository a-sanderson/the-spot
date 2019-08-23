import {createStackNavigator} from "react-navigation"
import ProfileScreen from "../screens/ProfileScreen.js"
import DashboardScreen from "../screens/DashboardScreen.js"
import SpotScreen from "../screens/SpotScreen.js"
import SpotResult from "../screens/SpotResult.js"

const ProfileStack = createStackNavigator(
    {
      ProfileScreen: ProfileScreen,
      // DashboardScreen: DashboardScreen,
      // SpotResult: SpotResult
      
    },
    {
      initialRouteName: "ProfileScreen"
    }
  );

  export default ProfileStack