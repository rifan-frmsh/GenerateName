import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Beranda from "../pages/beranda";
import Profil from "../pages/profil";
import AntDesign from "react-native-vector-icons/Feather";
import { Hasil } from "../pages/hasil";

const Tab = createMaterialBottomTabNavigator();

export default function NavTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Beranda"
      activeColor="#3795BD"
      inactiveColor="#FFFFFF"
      barStyle={{ backgroundColor: "#3A1078", height: 70 }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "Beranda") {
            iconName = "home";
          } else if (route.name === "Profil") {
            iconName = "user";
          } else if (route.name === "Hasil") {
            iconName = "book-open";
          }
          return <AntDesign name={iconName} color={color} size={26} />;
        },
      })}
    >
      <Tab.Screen name="Beranda" component={Beranda} />
      <Tab.Screen name="Hasil" component={Hasil} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
}
