import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import * as Clipboard from "expo-clipboard";
import AntDesign from "react-native-vector-icons/AntDesign";

const iconCopy = <AntDesign name="copy1" color="white" size={26} />;

export const Hasil = ({ route }) => {
  const gender = route.params?.gender || "";
  const URL = "https://api.api-ninjas.com/v1/babynames?gender=" + gender;
  const api = "2JAP8E2NZbuJbFF1HuWJiQ==blrJQ7ZR1AMXMVaM";
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [copiedText, setCopiedText] = React.useState("");

  React.useEffect(() => {
    setIsLoading(true);

    fetch(URL, {
      method: "GET",
      headers: { "X-Api-Key": api },
    })
      .then((response) => {
        if (response.status === 502) {
          alert("Internal Server Error, Tolong Pilih Nama Yang Lain");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        alert("Error: " + error.message);
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, [gender]);

  const copyToClipboard = async (quote) => {
    await Clipboard.setStringAsync(quote);
    setCopiedText(quote);
    alert("Quote copy Success!");
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.gender}>{item}</Text>
      <TouchableOpacity
        style={styles.copy}
        onPress={() => copyToClipboard(item)}
      >
        {iconCopy}
      </TouchableOpacity>
    </View>
  );

  const keyExtractor = (item, index) => index.toString();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Tunggu Sebentar</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatListContent}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        numColumns={2}
      />
      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  copy: {
    backgroundColor: "#3795BD",
    alignSelf: "flex-end",
    padding: 5,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFEA",
    justifyContent: "center",
    alignItems: "center",
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
  card: {
    backgroundColor: "#4E31AA",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    width: Dimensions.get("window").width / 2 - 20, // Mengatur lebar item
    height: 100, // Mengatur tinggi item
    alignItems: "center",
    justifyContent: "center",
  },
  gender: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#fff",
    marginBottom: 10,
    width: "100%",
  },
});
