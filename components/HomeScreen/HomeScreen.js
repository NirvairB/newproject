import React ,{useContext} from "react";
import { View,Text } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";


const HomeScreen = ()=>{

    const isDarkMode = useContext(ThemeContext)

    return(
        <View style={{backgroundColor:isDarkMode?'#22222':'#fff'}}>
            <Text style={{color: isDarkMode? '#fff':'#000'}}>Welcome My application</Text>
        </View>

    )

}

export default HomeScreen