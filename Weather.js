import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Weather({temp}){
    return (
    <View style = {styles.container}>
        
        <View style = {styles.halfContainer}> 
            <MaterialCommunityIcons name="weather-rainy" size={100} color="black" />
            <Text style = {styles.temp}>{temp}</Text>
        </View>

        <View style = {styles.halfContainer}>

        </View>
        
    </View>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf(
        ["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Dust", "Ash", "Squall", "Tornado"]
        ).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp:{
        fontSize: 36
    },
    
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});