import React, { useEffect, useState } from 'react';

import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import PlayerCard from '../Components/PlayerCard';

const MainScreen = () => {
  const [playerData, setPlayerData] = useState([]);
  const [newPlayer, setNewPlayer] = useState('');
  const [winPoints, setWinPoints] = useState(100);
  const [gameEnded, setGameEnded] = useState(false);
  const [winner, setWinner] = useState('');
  const [addingPlayer, setAddingPlayer] = useState(false);
  const update = (state) => {
    setPlayerData(state);
  };
  useEffect(() => {
    playerData.forEach((ele) => {
      if (ele['score'] >= winPoints) {
        setWinner(ele['name']);
        setGameEnded(true);
      }
    });
  });
  const renderPlayerCard = (itemData) => (
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

  const handleAddPlayerPress = () => {
    const currState = playerData.slice();
    currState.push({
      name: newPlayer,
      score: 0,
    });
    console.log(playerData);
    setPlayerData(currState);
    setAddingPlayer(false);
  };

  const handleCancel = () => {
    setAddingPlayer(false);
  };
  return (
    gameEnded
      ? (
        <View><Text> {winner} is the winner ! </Text>
          <Button
            title = 'Restart'
            onPress = {() => {
              setGameEnded(false);
              const currState = playerData.slice();
              currState.forEach((part, index, theArray) => {
                currState[index]['score'] = 0;
              });
              setPlayerData(currState);
            }}
          />
          <Button
            title = 'New Game'
            onPress = {() => {
              setGameEnded(false);
              setPlayerData([]);
            }}
          />
        </View>
      )
      : (
        <ScrollView>
          <FlatList style = {styles.FlatList} data = {playerData} renderItem = {renderPlayerCard} />

          {addingPlayer
            ? (
              <View style = {styles.secondView}>
                <Text>New player name:</Text>
                <TextInput style = {styles.input} onChangeText = {(input) => { setNewPlayer(input); }} />
                <View style = {styles.addButton}>
                  <Button title = 'Add Player' onPress = {handleAddPlayerPress} />
                  <Button title = 'Cancel' onPress = {handleCancel} />
                </View>
              </View>
            )

            : (
              <TouchableOpacity
                onPress = {() => {
                  setAddingPlayer(true);
                }}
                style = {styles.roundButton}
              >
                <Text style = {styles.buttonText}>+</Text>
              </TouchableOpacity>
            )}

        </ScrollView>
      )
  );
};

const styles = StyleSheet.create({
  addButton: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  roundButton: {
    marginLeft: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  buttonText: {
    fontSize: 16,
    color: '#505050',
  },
});
export default MainScreen;
