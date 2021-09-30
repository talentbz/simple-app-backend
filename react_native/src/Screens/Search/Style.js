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
    flex3:{flex:2},
    flex1:{
        flex:1,
        // justifyContent:"center",
        alignItems:"center",
    },
    content:{        
        // justifyContent:'center',
        // alignItems:"center",
        width:(global.screenwidth  - 30),
        height:70,
        marginTop:global.screenheight/2 - 40,
        marginLeft:15,
        borderWidth:3,
        // position:"absolute",
        borderColor:"#d7e2c2",
        backgroundColor:"#ecf0df",
        borderRadius:15,
        justifyContent:'center',
    },
    flexrow:{
        flexDirection:'row',
    },
    toptxt:{        
        // textAlign:'center',
        fontSize:32,
        width:100,
    },
    bottomtxt:{
        marginTop:20,
        fontSize:22, 
        textAlign:'center',
    },
    bottombtn:{
        width:120,
        height:50,
        marginLeft:global.screenwidth - 150,
        // marginTop:global.screenheight - 80,
        position:"absolute",
        // marginTop:global.screenheight - 580,
        marginTop:global.screenheight - 120,
        backgroundColor:"#9bbb58",
        borderRadius:10,
        borderWidth:3,
        borderColor:"#738547",
        color:"white",
        textAlign:"center",
        paddingTop:8,
        fontSize:24,
    },
    transcript:{
        // textAlign: 'center',
        color: '#B0171F',
        marginBottom: 1,
        // marginLeft:"auto",
        
        position:"absolute",
        // marginLeft:200,
        marginTop:180,
        height:50,
        width:120,
        borderRadius:10,
        marginLeft:"auto",
        marginRight:10,
        backgroundColor:"#9bbb58",
        borderWidth:3,
        borderColor:"#738547",
        color:"white",
        fontSize:24,
        textAlign:"center",
        paddingTop:7,
    },
    flexrow1:{
        flexDirection:'row',
        marginLeft:50,
    },

  });