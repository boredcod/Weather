import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading(){
    return (
    <View style = {styles.container}>
        <StatusBar barStyle = "dark-content" />
        <Text style = {styles.loading_font}>Gettting the Weather Please wait</Text>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#B5FDFF"
    },
    loading_font:{
        color: "#052526",
        fontSize: 30
    }
});