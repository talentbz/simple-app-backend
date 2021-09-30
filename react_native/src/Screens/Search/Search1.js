import React, {Component,useState} from 'react';
import {Text,Button, View, TouchableOpacity, TextInput, ImageBackground, AppRegistry} from 'react-native';
import {styles} from './Style';
import Voice from 'react-native-voice';

//  nakata.sho@abc.com
export default class Search extends Component  {

    constructor(props) {
        super(props);
        this.state = {
          results: ["つがる　りんご",],
          startbtn:'Start',
          startrecog:false,
          title:'',
        };
        Voice.onSpeechResults = this.onSpeechResults.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    componentWillUnmount() {
        Voice.destroy().then(Voice.removeAllListeners);
      }

    onSpeechResults(e) {
        this.setState({
          results: e.value,
        });
      }

    async _startRecognition(e) {
        console.log("this.state.startrecog", this.state.startrecog);        
        if( !this.state.startrecog) {
                this.setState({
                startrecog :true,
                startbtn : "Cancel",
                results: [],
                });
                try {
                await Voice.start('ja-JP');
                } catch (e) {
                console.error(e);
                }
        } else {
            this.setState({ startrecog :false,  startbtn : "Start"});
                try {
                // await Voice.stop('en-US');
                await Voice.stop();
                } catch (e) {
                console.error(e);
                }           
        }
      }

     onSearch(){
        console.log("title=", this.state.results);
        const payload =  this.state.results;
        fetch(`${global.server}/api/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then(async res => { 
            try {
                const jsonRes = await res.json();
                if (res.status !== 200) {
                    setIsError(true);
                    setMessage("Failed Server connect");

                } else {
                    console.log(jsonRes.data);
                    if(jsonRes.result) {
                        this.props.navigation.navigate("List", {data:jsonRes.data});
                    } else {
                        setMessage("There is no search result");
                    };

                }
            } catch (err) {
                console.log(err);
            };
        })
        .catch(err => {
            console.log(err);
        });        
    };

    render() {

        return (
            <View  >
                <View style={styles.content} >
                    {/* <TextInput style={styles.toptxt} placeholder="つがる　りんご" onChangeText={setTitle} /> */}
                    <Text style={styles.toptxt} >
                    {this.state.results.map((result, index) =>   {result}  
                    )}</Text>
                </View>
                
                {/* <TouchableOpacity> */}
                <View style={styles.flexrow1}>
                    <Text style={styles.transcript} onPress={this._startRecognition.bind(this)} >{this.state.startbtn}</Text>
                    <Text style={styles.bottombtn} onPress={this.onSearch}>検　索</Text>

                </View>
                {/* </TouchableOpacity> */}
            </View>
        )    
    }
}

AppRegistry.registerComponent('VoiceNative', () => VoiceNative);


