import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Product from '../components/Product';


export default function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView>
                <Header navigation={navigation} />
                <Product />
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fff"
    },

});