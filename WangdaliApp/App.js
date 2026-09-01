import { StyleSheet, Text, View } from 'react-native';
import StatCard from './components/StatCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>DREAMING BULLS 𓃓 Company Dashboard 📊</Text>

      {/* Rendering multiple cards using props */}
      <StatCard
        title="Total Users 👥"
        value="1,240"
        bgColor="#4f46e5"
      />

      <StatCard
        title="Revenue 💰"
        value="$12,450"
        bgColor="#059669"
      />

      <StatCard
        title="Pending Issues ⚠️"
        value="3"
        bgColor="#d97706"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#effeff',
    padding: 20,
    paddingTop: 50,
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#1f2937',
  },
});
