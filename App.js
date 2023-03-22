import * as React from "react";
import NavTabs from "./src/components/tabnav";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <NavTabs />
    </NavigationContainer>
  );
}
