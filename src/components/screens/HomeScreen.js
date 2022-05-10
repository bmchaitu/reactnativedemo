import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppTemplate from '../templates';
import { Typography } from '../../styles';

const HomeScreen = () => {

    return (
        <AppTemplate>
            <Text style={styles.sampleText}>
                I can do it!! {'\n'}
                I will do it!!
            </Text>
            <View style={styles.container}>
            </View>
        </AppTemplate>
    )
};

const styles = StyleSheet.create({
    sampleText: {
        ...Typography.largeText,
        ...Typography.regularText,
    },
    container: {
        height: 150,
        width: '90%',
        backgroundColor: 'red',
        borderRadius:  5,
    },
});

export default HomeScreen;