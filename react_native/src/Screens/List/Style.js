import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    flex3:{flex:2},
    flex1:{
        flex:1,
        // justifyContent:"center",
        alignItems:"center",
    },
    toptxt:{
        fontSize:28,
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        textAlign:"center",
    },
    toptxt1:{
        fontSize:16,
        marginTop:-15,
        marginRight:20,
        marginLeft: 'auto',
    },
    content:{
        marginLeft:20,
    },
    item:{
        flexDirection:'row',
    },
    scrollview:{
        marginBottom:140,
    },
    itemimg:{
        width:120,
        height:120,
        marginTop:20,
        marginBottom:10,
    },
    itemtxt:{
        marginLeft:20,
        marginRight:20,
        marginTop:20,
        fontSize:18,
        fontWeight:"bold",
        width:(global.screenwidth - 150 - 60 ),
    },    
    itemtxt1:{
        marginLeft:20,
        marginRight:20,
        fontSize:18,
        width:(global.screenwidth - 150 - 60 ),
    }

  });