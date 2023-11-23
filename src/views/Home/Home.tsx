import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../components/Header/Header';
import fetchApi from '../../utils/fetch';
import TodaysImage from '../../components/TodaysImage/TodaysImage';
import {PostImage} from '../../types';
import {format, sub} from 'date-fns';
import LastFiveDays from '../../components/LastFiveDays/LastFiveDays';

const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});
  const [lastFiveDaysImage, setLastFiveDaysImage] = useState<PostImage[]>([]);
  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.log(error);
        setTodaysImage({});
      }
    };

    const loadLastFiveDaysImage = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, 'yyyy-MM-dd');
        const fiveDyasAgoDate = format(sub(date, {days: 4}), 'yyyy-MM-dd');
        const lastFiveDyasImagesResponse = await fetchApi(
          `&start_date=${fiveDyasAgoDate}&end_date=${todaysDate}`,
        );
        await setLastFiveDaysImage(lastFiveDyasImagesResponse);
      } catch (error) {
        console.error(error);
      }
    };

    loadTodaysImage().catch(null);
    loadLastFiveDaysImage().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDays postImages={lastFiveDaysImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(7, 26,93, 255)',
  },
});

export default Home;
