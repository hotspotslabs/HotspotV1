import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Generate fake events data
const fakeEvents = Array.from({ length: 6 }, (_, index) => ({
  id: String(index),
  title: `Event Title ${index + 1}`,
  description: `This is the description for event ${index + 1}. It provides details about the event and what to expect.`,
}));

export default function Explore() {
  return (
    <FlatList
      data={fakeEvents}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <ThemedText style={styles.title}>{item.title}</ThemedText>
          <ThemedText style={styles.description}>{item.description}</ThemedText>
        </View>
      )}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});
