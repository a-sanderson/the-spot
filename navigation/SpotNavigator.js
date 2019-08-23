import {createMaterialTopTabNavigator} from "react-navigation"
import SpotScreen from "../screens/SpotScreen.js"
import UploadSpotScreen from "../screens/UploadSpotScreen.js"
import DashboardScreen from "../screens/DashboardScreen.js"
import SpotResult from "../screens/SpotResult.js";

const SpotStack  = createMaterialTopTabNavigator(
    {
      Spots: SpotScreen,
      New_Spot: UploadSpotScreen,
      
      
      
      
    }
   
  );

  export default SpotStack