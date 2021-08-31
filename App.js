/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';

import { useState, useEffect } from 'react';
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
  const [playerData, setPlayerData] = useState([]);
  const [newPlayer, setNewPlayer] = useState('');
  const [winPoints, setWinPoints] = useState(100);
  const [gameEnded, setGameEnded] = useState(false);
  const [winner, setWinner] = useState('');
  const update = (state) => {
    setPlayerData(state);
  };
  useEffect(() => {

    playerData.forEach(ele => {
      console.log(ele['score'])
      if (ele['score'] >= winPoints)
      {
        setWinner(ele['name'])
        setGameEnded(true)
      }
    })
  })
  const renderPlayerCard = (itemData) => {
    return (
          <View>
            <PlayerCard
              allPlayers = {playerData}
              name = {itemData.item.name}
              score = {itemData.item.score}
              changeScore = {update}
              winPoints = {winPoints}
              setWinner = {setWinner}
              setGameEnded = {setGameEnded}
            />
          </View>
    );
  };

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
    gameEnded?
      (<View><Text> {winner} is the winner ! </Text>
        <Button title = 'Restart' onPress={() => {
          setGameEnded(false)
          const currState = playerData.slice()
          currState.forEach(function(part, index, theArray) {
            currState[index]['score'] = 0;
          })
          setPlayerData(currState)  
            ;
        }}></Button>
        <Button title='New Game' onPress={() => {
          setGameEnded(false)
          setPlayerData([])
        }}></Button>
      </View >)
    :
    <ScrollView>
      <FlatList style = {styles.FlatList} data = {playerData} renderItem = {renderPlayerCard} />
      <View style = {styles.secondView}>
        <Text>New player name:</Text>
        <TextInput style = {styles.input} onChangeText = {(input) => { setNewPlayer(input); }} />
        <View style = {styles.addButton}>
          <Button title = 'Add Player' onPress = {handlePress} />
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addButton: {
    marginTop: 5,
  },
  secondView: {
    margin: 10,
    elevation: 1,
    borderRadius: 10,
    borderColor: '#fff',
    padding: 15,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
    padding: 10,
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  FlatList: {
    marginVertical: 10,
  },
});

export default App;
