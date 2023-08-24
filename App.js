import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput} from 'react-native';
import MiprimerComponente from './MiprimerComponente';
import Clase from "./Clase";

export default function App() {

  const [nombre, setnombre] = useState("");

  return (
    <View style={styles.container}>
      <Text>Hola estimado leo tontito</Text>
      <TextInput
      placeholder='Ingrese aquí el nombre'
      onChangeText={(text) => {
        setnombre(text);
      }}
      />
      <MiprimerComponente nombre={nombre} edad={29} genero="Binario"/>

      {
        /*
        variables valores --> estados num1, num2, resultado.
        componentes variables mutables estatdos
        componentes no cambian inmuables. propiedades.
        
        <a href="www.google.com">

        Padre--> hijo
        la menor canidad de componentes mutables y que el padre maneje todos los estados y através de propiedades nosotros podamos enviarle datos a los hijos.
        
        */
      }



      <Clase/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
