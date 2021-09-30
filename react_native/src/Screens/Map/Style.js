import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    content:{
        margin:0,
    },
    mapcontainer: {
        height: global.screenheight,
        width: global.screenwidth,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    map: {
            ...StyleSheet.absoluteFillObject,
    },
    iconimg:{
        width:40,
        height:40,
    },

  });