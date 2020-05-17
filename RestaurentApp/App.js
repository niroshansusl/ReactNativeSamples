import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./src/screens/SearchScreen";
import DetailPageScreen from "./src/screens/DetailPageScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Detail: DetailPageScreen,
  },
  {
    initialRoutName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
      headerTitleAlign: "center",
    },
  }
);

export default createAppContainer(navigator);
