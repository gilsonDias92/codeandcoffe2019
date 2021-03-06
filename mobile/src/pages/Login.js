import React, { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform, //identifica se é android ou ios para algumas configs personalizadas
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

import api from "../services/api";
import logo from "../assets/logo.png";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [techs, setTechs] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("user").then(user => {
      if (user) {
        navigation.navigate("List");
      }
    });
  }, []);

  async function handleSubmit() {
    // email, tecnologias
    const response = await api.post("/sessions", {
      email
    })

    const { _id } = response.data;

    await AsyncStorage.setItem("user", _id);
    await AsyncStorage.setItem("techs", techs);

    navigation.navigate("List");
  }
  return (
    // configuracoes para teclado não subir até o botao
    // android é padrao, será habilitado para iOS
    <KeyboardAvoidingView
      style={styles.container}
      // enabled={Platform.OS === "ios"}
      behavior="padding"
    >
      <Image source={logo} />

      <View style={styles.form}>
        <Text style={styles.label}> SEU E-MAIL *</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={styles.label}> TECNOLOGIAS *</Text>
        <TextInput
          style={styles.input}
          placeholder="Tecnologias de interesse"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={text => setTechs(text)}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.textButton}>Encontrar Spots</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  form: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
    marginTop: 30
  },

  label: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: 8
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },

  button: {
    height: 42,
    backgroundColor: "#ffc107",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2
  },

  textButton: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16
  }
});
