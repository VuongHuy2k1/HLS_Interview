import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Data} from '../Data/Data';

interface UserData {
  reading: number;
  token: string;
  like: number[];
  dislike: number[];
}

const Main: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const [userData, setUserData] = useState<UserData>({
    reading: 0,
    token: 'use12345',
    like: [],
    dislike: [],
  });

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const saveData = async (value: any) => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(value));
      console.log('Data saved successfully!');
    } catch (error) {
      console.log('Error saving data: ', error);
    }
  };
  const likeBtn = (id: number) => {
    const newLike = [...userData.like, id];
    const reading = value + 1;
    const variable: UserData = {
      ...userData,
      like: newLike,
      reading: reading,
    };
    setValue(reading);
    setUserData(variable);
    saveData(variable);
  };

  const dislikeBtn = (id: number) => {
    const newDislike = [...userData.dislike, id];
    const reading = value + 1;
    const variable: UserData = {
      ...userData,
      dislike: newDislike,
      reading: reading,
    };
    setValue(reading);
    setUserData(variable);
    saveData(variable);
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        {value >= Data.length ? (
          <Text style={styles.contentEnd}>
            "That's all the jokes for today! Come back another day!"
          </Text>
        ) : (
          <Text style={styles.content}>{Data[value].content}</Text>
        )}
      </View>
      {value < Data.length && (
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.btnLeft}
            onPress={() => likeBtn(Data[value].id)}>
            <Text style={styles.btnText}>This is Funny!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnRight}
            onPress={() => dislikeBtn(Data[value].id)}>
            <Text style={styles.btnText}>This is not funny.</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    minHeight: 200,
    backgroundColor: '#fff',
    height: 'auto',
    width: '100%',
  },
  top: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '94%',
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  content: {
    textAlign: 'justify',
    opacity: 0.6,
  },
  contentEnd: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontWeight: '600',
    fontSize: 24,
    marginTop: 80,
  },
  btnLeft: {
    height: 'auto',
    width: 140,
    backgroundColor: '#2C7EDB',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  btnRight: {
    height: 'auto',
    width: 140,
    backgroundColor: '#29B363',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    marginVertical: 12,
    color: '#ffff',
    fontWeight: 'bold',
  },
});

export default Main;
