import React, {Component} from 'react';
import { Text, View, StyleSheet, ScrollView} from 'react-native';
import CustomButton from '../common/CustomButton';

export default class FavoritesScreen extends Component {
    constructor(props){
        super(props);
    }
    render(){
      return (
        <View style={{flex:1, backgroundColor:'#f6f6f7'}}>
          <View style={[styles.topView,{flexDirection:'row', flex:1}]}>
            <View style={{flex:1}}>
              <CustomButton
                buttonColor={'#f6f6f7'}
                buttonImage={require('../asserts/slide_btn.png')}
              />
            </View>
            <View style={{flex:7, justifyContent: 'center'}}>
              <Text style={{textAlign:'center', fontSize:25}}>단골매장</Text>
            </View>
            <View style={{flex:1}}>
              <CustomButton
                buttonColor={'#f6f6f7'}
                buttonImage={require('../asserts/search_btn.png')}
              />
            </View>
          </View>
          <View style={{flex:1}}>
            <View style={{flexDirection:'row', flex:1}}>
              <View style={{flex:5, justifyContent: 'center'}}>
                <CustomButton
                  buttonColor={'#f6f6f7'}
                  buttonTitle={'관심단골'}
                  titleColor={'#000'}
                  titleSize={20}
                  buttonWidth={200}
                />
              </View>
              <View style={{flex:5, justifyContent: 'center'}}>
                <CustomButton
                  buttonColor={'#f6f6f7'}
                  buttonTitle={'찐단골'}
                  titleColor={'#000'}
                  titleSize={20}
                  buttonAlign={'center'}
                  buttonWidth={200}
                />
              </View>
            </View>
          </View>
          <View style={{flex:10, marginLeft:15, marginRight:15, backgroundColor:'green'}}>
            <ScrollView style={{flex:1}}>
                <Text style={{fontSize:30}}>화로에 지진 닭</Text>
                <Text style={{fontSize:30}}>닭쳐줄래</Text>
                <Text style={{fontSize:30}}>오리날닭</Text>
                <Text style={{fontSize:30}}>교촌치킨</Text>
                <Text style={{fontSize:30}}>종국이 두마리 치킨</Text>
                <Text style={{fontSize:30}}>굽네 치킨</Text>
                <Text style={{fontSize:30}}>지코바</Text>
                <Text style={{fontSize:30}}></Text>
                <Text style={{fontSize:30}}></Text>
                <Text style={{fontSize:30}}></Text>
              </ScrollView>
          </View>
        </View>
      );
    }
}
  
const styles = StyleSheet.create({
  topView:{
    flex:5,
    paddingLeft:30,
    paddingRight:30,
    paddingTop:16
  }
});