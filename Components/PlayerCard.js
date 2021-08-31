import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const PlayerCard = (props) => {
  const [update, setUpdate] = useState(0);
  let id;
  for (let i = 0; i < props.allPlayers.length; i++) {
    if (props.allPlayers[i]['name'] == props.name) id = i;
  }
  console.log(props.allPlayers[id]['score']);
  return (
    <View style = {styles.card}>
      <Text style = {styles.playerDetails}>{props.name}: {props.score} </Text>
      <View style = {styles.buttonContainer}>
        <Button
          color = '#9aeb91'
          style = {styles.button}
          title = '+1'
          onPress = {() => {
            const currState = props.allPlayers.slice();
            currState.forEach((part, index, theArray) => {
              if (currState[index]['name'] === props.name) {
                currState[index]['score'] = currState[index]['score'] + 1;
              }
            });
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 5,
  },
  button: {
    elevation: 4,
    borderRadius: 10,
  },
  playerDetails: {
    textAlign: 'center',
  },
  card: {
    flex: 1,
    elevation: 2,
  },
});

export default PlayerCard;
