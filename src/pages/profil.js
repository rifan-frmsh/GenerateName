import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function Profil() {
  return (
    <View style={styles.container}>
      <Text>Rifan Firmansyah </Text>
      <Text>119140055</Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFEA",
    alignItems: "center",
    justifyContent: "center",
  },
});
