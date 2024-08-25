import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const AttendanceRecordScreen = ({ navigation }) => {
  const attendanceData = [
    { id: '1', date: '2024-01-01', status: 'Present' },
    { id: '2', date: '2024-01-02', status: 'Absent' },
    { id: '3', date: '2024-01-03', status: 'Present' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.recordContainer}>
      <Text style={styles.recordText}>{item.date}</Text>
      <Text style={item.status === 'Present' ? styles.presentText : styles.absentText}>
        {item.status}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>

      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText} onPress={() => navigation.navigate('Home')}>←</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Attendance Record</Text>
      <FlatList
        data={attendanceData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    marginTop: 10,
    marginBottom: 30,
    color: '#22577A',
    textAlign: 'center',
  },
  list: {
    flexGrow: 1,
  },
  recordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  recordText: {
    fontSize: 18,
    color: '#000',
  },
  presentText: {
    fontSize: 18,
    color: '#008000', 
  },
  absentText: {
    fontSize: 18,
    color: '#FF0000', 
  },
  backButtonContainer: {
    width: '100%',
    paddingHorizontal: -10,
    alignItems: 'flex-start',
  },
  backButton: {
    backgroundColor: 'transparent',
    padding: 10,
    marginTop: 30
  },
  backButtonText: {
    fontSize: 35,
    color: '#000',
  },
});

export default AttendanceRecordScreen;
