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
        fontSize:32,
        margin:20,
    },
    content:{
        margin:20,
    },
    item:{
        flexDirection:'row',
    },
    itemimg:{
        width:global.screenwidth - 40,
        height:200,
        marginTop:20,
    },
    itemtxt:{
        marginTop:20,
        fontSize:20,
        fontWeight:"bold",
    },
    itemtxt1:{
        // margin:20,
        fontSize:20,
    },
    bottombtn:{
        textAlign:'center',
        fontSize:28,
        
    },
    flexrow:{
        flexDirection:"row",
        justifyContent:'center',
        alignItems:"center",
        marginLeft:20,
        marginRight:20,
        marginTop:20,
    },

  });