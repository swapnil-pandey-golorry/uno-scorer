/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';

import { useState } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import PlayerCard from './Components/PlayerCard';

const App = () => {
  const update = (state) => {
    setPlayerData(state);
  };
  const renderPlayerCard = (itemData) => {
    console.log(playerData);
    return (
      <View>
        <PlayerCard
          allPlayers = {playerData}
          name = {itemData.item.name}
          score = {itemData.item.score}
          changeScore = {update}
        />

      </View>

    );
  };

  const [playerData, setPlayerData] = useState([]);
  const [newPlayer, setNewPlayer] = useState('');

  const handlePress = () => {
    const currState = playerData.slice();
    currState.push({
      name: newPlayer,
      score: 0,
    });
    console.log(playerData);
    setPlayerData(currState);
  };
  return (
    <View>
      <FlatList data = {playerData} renderItem = {renderPlayerCard} />
      <View style = {styles.buttonContainer}>
        <TextInput style = {styles.input} onChangeText = {(input) => { setNewPlayer(input); }} />
        <Button style = {styles.addButton} title = 'Add Player' onPress = {handlePress} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    margin: 10,
    elevation: 4,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});

export default App;
