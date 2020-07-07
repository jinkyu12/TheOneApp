import React, {Component} from 'react';
import { Text, View } from 'react-native';

export default class PointScreen extends Component {
    constructor(props){
        super(props);
    }
    render(){
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>포인트</Text>
      </View>
      );
    }
  }
  