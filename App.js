import React from "react";
import { Alert } from "react-native";
 import Loading from "./Loading";
 import * as Location from "expo-location";
 import axios from "axios";
 import Weather from "./Weather";

const API_KEY = "0475b1dd077f2013ecc5c072b933ff84";

export default class App extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async(latitude,longitude) => {  
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    console.log(data);
    this.setState({isLoading: false, temp: data.main.temp, condition: data.weather[0].main, city: data.name, temp_max: data.main.temp_max, temp_min: data.main.temp_min});
  };
  getLocation = async() =>{
    try{
      await Location.requestForegroundPermissionsAsync();
      const { coords: { latitude, longitude} } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    }
    catch (error){
      Alert.alert("Can't find you.", "So sad");
    }
    
  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading, temp , condition, city, temp_max, temp_min } = this.state;
    return (
      isLoading ? 
        <Loading /> : 
        <Weather 
          temp = {Math.round(temp)} 
          condition = {condition} 
          city = {city} 
          temp_max = {Math.round(temp_max)} 
          temp_min = {Math.round(temp_min)}/>);
  }
}



