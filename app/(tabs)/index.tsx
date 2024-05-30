import { StyleSheet, View } from 'react-native';
import React from 'react';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Hotspot</ThemedText>
        <HelloWave />
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Ensure the background is transparent
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: 8, // use margin or padding instead of gap
    backgroundColor: 'transparent', // Ensure the background is transparent
  },
});
