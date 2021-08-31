import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const PlayerCard = (props) => {
  let id;
  for (let i = 0; i < props.allPlayers.length; i++) {
    if (props.allPlayers[i]['name'] == props.name) id = i;
  }
  console.log(props.allPlayers[id]['score']);
  return (
    <View style = {styles.card}>
      <View style = {styles.detailsContainer}>
        <Text style = {styles.playerDetails}>{props.name}:       {props.score} </Text>
      </View>
      <View style = {styles.buttonContainer}>
        <Button
          color = '#9aeb91'
          style = {styles.button}
          title = '+1'
          onPress = {() => {
            const currScore = 0;
            const currState = props.allPlayers.slice();
            currState.forEach((part, index, theArray) => {
              if (currState[index]['name'] === props.name) {
                currState[index]['score'] = currState[index]['score'] + 1;
                currScore = currState[index]['score'] + 1;
              }
            });
            console.log('hello');
            props.changeScore(currState);
          }}
        />
        <Button
          color = '#83f777'
          style = {styles.button}
          title = '+10'
          onPress = {() => {
            const currState = props.allPlayers.slice();
            currState.forEach((part, index, theArray) => {
              if (currState[index]['name'] === props.name) {
                currState[index]['score'] = currState[index]['score'] + 10;
              }
            });
            props.changeScore(currState);
          }}
        />
        <Button
          color = '#1cff03'
          style = {styles.button}
          title = '+50'
          onPress = {() => {
            const currState = props.allPlayers.slice();
            currState.forEach((part, index, theArray) => {
              if (currState[index]['name'] === props.name) {
                currState[index]['score'] = currState[index]['score'] + 50;
              }
            });
            props.changeScore(currState);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    elevation: 5,
    borderRadius: 10,
  },
  detailsContainer: {
    margin: 4,
    borderColor: '#384960',
    borderWidth: 0.4,
    borderRadius: 30,
  },
  playerDetails: {
    textAlign: 'center',
    padding: 3,

  },
  card: {
    flex: 1,
    elevation: 2,

    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 7,
  },
});

export default PlayerCard;
