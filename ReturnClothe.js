import React, { useState }from "react";
import PropTypes from "prop-types";
import Weather from "./Weather";
import weatherOptions from "./Weather";
import { View, Text, StyleSheet, ScrollView, StatusBar, Modal, TouchableHighlight, Alert, Pressable} from "react-native";
export default function text({temperature}){
    if (temperature < 4) {
        return ("Padding, Thick Coat, Thick Scarf");
    }
    else if (temperature < 8) {
        return ("Coat, Leather Jacket, Heat tech, Knit, Leggings");
    }
    else if (temperature < 11){
        return ("Jacket, Trench Coat, Jeans");
    }
    else if (temperature < 16){
        return ("Jacket, Thick Cardigan, Jeans, Dress Pants, Jumper");
    }
    else if (temperature < 19){
        return ("Thin Knit, Crewneck, Cardigan, Jeans");
    }
    else if (temperature < 22){
        return ("Thin Cardigan, Long Sleeve Shirt, Thin Pants, Jean");
    }
    else if (temperature < 27){
        return ("T-shirt, Thin Shirts, Shorts, Thin pants");
    }
    else {
        return ("Tank-top, T-shirt, Shorts, One-piece")
    }
}


const styles = StyleSheet.create({
    container: {
        fontSize: 24
    }
});