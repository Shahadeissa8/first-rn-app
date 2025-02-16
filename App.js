import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("./ava.jpg")}
          style={{ width: 100, height: 100 }}
        />
        <View>
          <Text style={styles.bigTitle}>Shahad Eissa</Text>
          <Text style={styles.country}>Kuwait</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.container2}>
          <View style={styles.textCenter}>
            <Text style={styles.text}>80K</Text>
            <Text>Following</Text>
          </View>
          <View style={styles.textCenter}>
            <Text style={styles.text}>808K</Text>
            <Text>Followers</Text>
          </View>
          <View style={styles.textCenter}>
            <Text style={styles.text}>100</Text>
            <Text>Photos</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#006072",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    // flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 30,
    // backgroundColor: "#006072",
    alignItems: "center",
  },
  card: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderRadius: 30,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  textCenter: {
    alignItems: "center",
  },
  bigTitle: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  country: {
    color: "grey",
    fontSize: 20,
    textAlign: "center",
  },
  line: {
    height: 1,
    backgroundColor: "lightgrey",
    width: 200,
    marginTop: 10,
    marginBottom: 10,
  },
});
