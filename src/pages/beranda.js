import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
} from "react-native";
import * as React from "react";
import { obj } from "../db";

const Beranda = ({ navigation }) => {
  let genderData = obj;

  const windowWidth = Dimensions.get("window").width;
  const buttonWidth = windowWidth - 40;

  return (
    <View
      classgender="flex-1 pt-4 pb-3"
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#FFFFEA",
      }}
    >
      <Text style={styles.titleHead}>Generate Name</Text>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, marginTop: 5 }}
        keyboardShouldPersistTaps="handled"
      >
        {genderData.map((data, index) => {
          return (
            <View classgender="items-center py-3" key={index}>
              <View style={styles.buttonContainer}>
                {genderData[index] && (
                  <TouchableOpacity
                    style={[styles.button, { width: buttonWidth }]}
                    onPress={() => {
                      console.log(genderData[index].gender);
                      navigation.navigate("Hasil", {
                        gender: genderData[index].gender,
                      });
                    }}
                  >
                    <Text style={styles.buttonText}>
                      {genderData[index].gender}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          );
        })}
      </ScrollView>
      <Text style={styles.title}>
        Rekomendasi untuk anda yang bingung memilih nama bayi, silahkan pilih
        opsi diatas
      </Text>
      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 5,
    marginBottom: 250,
    color: "#4E31AA",
  },
  titleHead: {
    color: "#3A1078",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#4E31AA",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Beranda;
