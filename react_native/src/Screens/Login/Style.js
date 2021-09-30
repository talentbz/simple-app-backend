import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo: {
      width: 140,
      height: 140 * 61 / 79
    },
    imgbackground:{
        width:global.screenwidth,
        height:global.screenheight,
    },
    // flex3:{flex:2},
    acenter:{
        // flex:1,
        // justifyContent:"center",
        alignItems:"center",
        marginTop:global.screenheight - 300,
    },
    email:{
        width:global.screenwidth - 100,
        height:40,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:"white",
        margin:20,
        borderRadius:8,
    },
    password:{
        width:global.screenwidth - 100,
        height:40,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:"white",
        borderRadius:8,
    },
    loginbtn:{
        marginLeft:(global.screenwidth  - 150 - 100),
        marginTop:30,
        width:150,
        height:50,
        backgroundColor:"#9bbc51",
        borderWidth:3,
        borderColor:"#71824c",
        borderRadius:10,
        color:"white",
        fontSize:24,
        textAlign:'center',
        paddingTop:8,
    },
    message:{
        fontSize:16,
    }

  });