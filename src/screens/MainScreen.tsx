import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, ScrollView} from 'react-native';
import {Picker} from '@react-native-community/picker';
import CustomButton from '../common/CustomButton';

export default class MainScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      item:''
    }
  }
  
  updateValue = (selectedItem) => {
    this.setState({
      item:selectedItem
    });
  }

  render(){
    return (
      <View style={{flex:1}}>
        <View style={styles.topView}>
          <View style={{flexDirection:'row', flex:1}}>
            <View style={{flex:1}}>
              <CustomButton
                buttonColor={'#EECB5A'}
                buttonImage={require('../asserts/slide_btn.png')}
              />
            </View>
            <View style={{flex:7}}></View>
            <View style={{flex:1}}>
              <CustomButton
                buttonColor={'#EECB5A'}
                buttonImage={require('../asserts/search_btn.png')}
              />
            </View>
          </View>
          <View style={{flex:10, justifyContent:"center"}}>
            <Text style={styles.topText}>김진규 님은</Text>
            <View style={{flexDirection:"row"}}>
              <Text style={styles.topText}>지금</Text>
              <Picker
                mode={'dialog'}
                style={{width:100, height:50, marginLeft:20, marginRight:20}}
                selectedValue={this.state.item}
                onValueChange={(itemValue, itemIndex) =>
                  this.updateValue(itemValue)
                }
              >
                <Picker.Item label="치킨" value="C" />
                <Picker.Item label="피자" value="P" />
                <Picker.Item label="족발" value="J" />
                <Picker.Item label="한식" value="H" />
              </Picker>
              <Text style={styles.topText}>이/가</Text>
            </View>
            <Text style={styles.topText}>당깁니다</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={{flex:1, paddingTop:10,paddingRight:30, paddingLeft:30}}>
            <View style={{flexDirection:"row"}}>
              <View style={{flexDirection:"row", flex:4}}>
                <CustomButton
                  buttonTitle={'인기'}
                  titleColor={'#000'}
                />
                <Text style={styles.contentText}>|</Text>
                <CustomButton
                  buttonTitle={'거리'}
                  titleColor={'#000'}
                />
                <Text style={styles.contentText}>|</Text>
                <CustomButton
                  buttonTitle={'최신'}
                  titleColor={'#000'}
                />
              </View>
              <View style={{flex:4}} />
              <View style={{flex:1}}>
                <CustomButton
                  buttonTitle={'더보기'}
                  titleColor={'#000'}
                  buttonWidth={50}
                />
              </View>
            </View>
          </View>
          <View style={{flex:10, paddingTop:10, paddingRight:30, paddingLeft:30}}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topView:{
    flex:5,
    paddingLeft:30,
    paddingRight:30,
    paddingTop:30,
    backgroundColor:'#EECB5A',
  },
  topText:{
    fontSize:30,
    textAlign:"left",
    color:"#383635",
  },
  content:{
    flex:6,
  },
  contentText:{
    fontWeight:"bold"
  },
  tops:{
    backgroundColor:"black",
    borderTopWidth:0.5,
    borderColor:"#A0A0A0"
  }
});
