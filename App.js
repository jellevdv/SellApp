
import React from 'react';
import { StyleSheet, View} from 'react-native';


import AppCard from './app/components/AppCard';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessageScreen from './app/screens/MessagesScreen';




export default function App()   { 
  return (
    /*
    <View style={styles.background}>
        <AppCard title='Red jacket for sale!' subTitle='$ 100' image={require('./app/assets/jacket.jpg')}/>
    </View>
    */

    /*
   <View>
   <ListingDetailsScreen />
   </View>
   */

     <MessageScreen />
    
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100
  }
})


