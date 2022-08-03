import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NativeFormsModal } from "native-forms";

const App = () => {
  const [hasForm, showForm] = useState(false);
  return (
    <View style={styles.container}>
      <Button title="Show Form" onPress={() => showForm(true)} color="#20f" />
      <NativeFormsModal
        visible={hasForm}
        form="https://form.nativeforms.com/I2Z5xWPmZic4JlRvpmNy0Db"
        onClose={() => showForm(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;