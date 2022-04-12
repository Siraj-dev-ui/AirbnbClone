import React from 'react';
import {StatusBar , View , Text} from 'react-native';

import 'react-native-gesture-handler';

import HomeScreen from './src/screens/Home';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';

// import Router from './src/navigation/Router';

import Post from './src/components/Post';
import feed from './assets/data/feed';

import Entype from 'react-native-vector-icons/Entypo';

const post1 = feed[0]
const post2 = feed[1]

const App: () => React$Node = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <Router/> */}
      {/* <View>
        <Text>
          here we go
        </Text>
      </View> */}
      <GuestsScreen/>
    </>
  );
};



export default App;
