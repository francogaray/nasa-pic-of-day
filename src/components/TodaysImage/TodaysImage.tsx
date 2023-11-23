import React, {FC} from 'react';
import {Text, View, StyleSheet, Image, Button} from 'react-native';

import {PostImage, RootStackParams} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'Detail'
>;

const TodaysImage: FC<PostImage> = ({url, date, title, explanation}) => {
  const {navigate} = useNavigation<PostImageNavigationProps>();
  const handleViewPress = () => {
    navigate('Detail', {title, date, url, explanation});
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: url}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" onPress={handleViewPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c44d9',
    marginVertical: 16,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 32,
  },
  image: {
    width: '100%',
    borderRadius: 32,
    height: 190,
    borderWidth: 2,
    borderColor: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 12,
    fontWeight: 'bold',
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
});

export default TodaysImage;
