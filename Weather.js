import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, ScrollView, StatusBar} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Popup from "./Pop";
const weatherOptions = {
    Haze : {
        iconName: "weather-hail"
    },
    Thunderstorm :{
        iconName: "weather-lightning-rainy"
    },
    Drizzle: {
        iconName: "weather-rainy"

    },
    Rain: {
        iconName: "weather-pouring"
    },
    Snow: { 
        iconName: "weather-snowy"
    },
    Clear: {
        iconName: "weather-sunny"
    },
    Clouds: {
        iconName: "weather-cloudy"
    },
    Mist: {
        iconName: "weather-fog"
    },
    Smoke: {
        iconName: "alert"
    },
    Dust: {
        iconName: "alert"
    },
    Fog: {
        iconName: "weather-fog"
    },
    Sand: {
        iconName: "alert"
    },
    Ash: {
        iconName: "alert"
    },
    Tornado: {
        iconName: "weather-tornado"
    }
};

export default function Weather({temp, condition, city, temp_min, temp_max}){
    return (
        
        <View
        style={styles.container}>
            <ScrollView contentContainerStyle={{
                flex: 1,
                justifyContent: 'space-between'
            }}>
            <View style = {styles.topContainer}> 
                <View style = {styles.halfContainer}> 
                    <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={100} color="black" />
                    <Text style = {styles.city}>{condition}</Text>
                </View>
                <View style = {styles.halfContainer}> 
                    <Text style = {styles.city}>{city}</Text>
                    <View style = {styles.horiContainer}>
                        <Text style = {styles.temp}>Low: {temp_min}˚</Text>  
                        <Text style = {styles.temp}>Current: {temp}˚</Text>
                        <Text style = {styles.temp}>High: {temp_max}˚</Text>
                    </View>
                </View>
            </View>
            <View style = {styles.halfContainer}>
                <Popup temperature = {temp}/>
            </View>
            </ScrollView>
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
        alignItems: "center",
        backgroundColor: "#dbc6c1"
    },
    topContainer:{
        padding: 30,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp:{
        fontSize: 20,
        color: "black"
    },
    city:{
        fontSize: 36,
        color: "black"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    horiContainer: {
        flex: 1,
        flexDirection: "row"
    }
});