import React from "react";
import {View, Text} from "react-native";

export default function MiprimerComponente(props){
    return(
        <View>
            <Text style={{ color: "red" }}> Hola {props.nombre}, Edad: {props.edad}, Genero: {props.genero}</Text>
        </View>
    );
}