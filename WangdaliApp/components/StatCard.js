import { StyleSheet, Text, View } from 'react-native';
export default function StatCard(props) {
    return (
        <View style={[styles.card, { backgroundColor: props.bgColor }]}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.value}>{props.value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 40,
        borderRadius: 50,
        marginVertical: 15,
        width: '100%',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.60)',
        borderWidth: 3,
    },
    title: {
        fontSize: 35,
        color: '#ffffff',
        fontWeight: '600',
        textAlign: 'center',
    },
    value: {
        fontSize: 38,
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 15,
        textAlign: 'center',
    },
});