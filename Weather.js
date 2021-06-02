import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze : {
        iconName: "weather-hail",
        gradient: ["#bdc3c7","#2c3e50"]
    },
    Thunderstorm :{
        iconName: "weather-lightning-rainy",
        gradient: ["#bdc3c7","#2c3e50"]
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#bdc3c7","#2c3e50"]
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#bdc3c7","#2c3e50"]
    },
    Snow: { 
        iconName: "weather-snowy",
        gradient: ["#ECE9E6","#FFFFFF"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#2980B9","#FFFFFF"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#ADA996","#EAEAEA"]
    },
    Mist: {
        iconName: "weather-fog",
        gradient : ["#E0EAFC", "#CFDEF3"]
    },
    Smoke: {
        iconName: "alert",
        gradient: ["#bdc3c7","#2c3e50"]
    },
    Dust: {
        iconName: "alert",
        gradient: ["#CCCCB2","#757519"]
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#bdc3c7","#2c3e50"]
    },
    Sand: {
        iconName: "alert",
        gradient: ["#CCCCB2","#757519"]
    },
    Ash: {
        iconName: "alert",
        gradient: ["#CCCCB2","#757519"]
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#bdc3c7","#2c3e50"]
    }
};

export default function Weather({temp, condition, city}){
    return (
        <LinearGradient
        // Background Linear Gradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
            <View style = {styles.halfContainer}> 
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={100} color="white" />
                <Text style = {styles.temp}>{condition}</Text>
                <Text style = {styles.temp}>{temp}˚</Text>
            </View>

            <View style = {styles.halfContainer}>
                <Text style = {styles.temp}>{city}</Text>
            </View>
        </LinearGradient>
        
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
        fontSize: 36,
        color: "white"
    },
    
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});