import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './store/store';




const CounterApp  = ()=>{
    const dispatch = useDispatch();
    const counterValue = useSelector((state)=>  state.counter.value);



return (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text style={{fontSize: 24}}>Counter:{counterValue}</Text>
    <View style={{flexDirection:'row',justifyContent:'space-evenly',}}>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  </View>
);



}

export default CounterApp;
