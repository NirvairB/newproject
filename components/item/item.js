import React from "react";
import { View,Text } from "react-native";
import Proptypes from 'react-native'



const Item = ({name,price})=>{
    return (<View>
        <Text>{name}</Text>
        <Text>{price}</Text>
    </View>


    )
}
Item.prototype = {
    name:Proptypes.string.isRequired,
    price:Proptypes.number.isRequired,
}

export default Item;