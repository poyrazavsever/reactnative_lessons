import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const courses = [
    {name: "Angular", id:1},
    {name: "React Js", id:2},
    {name: "C#", id:3},
    {name: "C Programlama", id:4},
    {name: "Bootstrap", id:5},
  ];
  return (
    <FlatList 
    keyExtractor={(item) => item.id}
    // horizontal
    // showsHorizontalScrollIndicator = {false}
    data={courses}
    renderItem={({item}) => {
      return <Text style={styles.content}>{item.name}</Text>
    }}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize:20,
    backgroundColor: 'yellow',
    marginVertical: 10,
    padding: 20
  }
});
