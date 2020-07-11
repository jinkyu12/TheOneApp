import React, {Component} from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    Image,
    View,
} from 'react-native';

export default class CustomButton extends Component {
    static defaultProps = {
        buttonTitle: '',
        buttonColor:'#fff',
        titleColor:'#fff',
        titleSize:20,
        buttonImage:'',
        buttonAlign:'center',
        buttonWidth:28,
        buttonHeight:28,
        onPress: () => null,
    }

    constructor(props){
        super(props);
    }

    render() {
      return (
        <View style={[
                styles.container,
                {width:this.props.buttonWidth,
                 height:this.props.buttonHeight,
                 alignItems:this.props.buttonAlign, 
                 backgroundColor:this.props.buttonColor}
            ]}>
          <Text style={[
              {color:this.props.titleColor, fontSize:this.props.titleSize, textAlign:'center'}
            ]}>{this.props.buttonTitle}</Text>
          <TouchableOpacity
            // onPress={this.props.onPress}
            onPress={()=>{alert("you clicked me")}}
          >
            <Image source={this.props.buttonImage}/>
          </TouchableOpacity>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        // backgroundColor: '#eecb5a',
        // alignItems: 'flex-start',
        marginLeft:5,
        marginRight:5,
    },
  });