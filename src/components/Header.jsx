import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";

const App = () => {
  return (
    <View style={styles.screen}>
      <Header />
      {/* Aquí iría el resto de la app */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
