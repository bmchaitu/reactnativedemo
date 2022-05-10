import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

const AppTemplate = ({ children, customStyles }) => {

    return (
        <SafeAreaView style={styles.screenContainer(customStyles)}>
            {children}
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    screenContainer: customStyles => ({
        flex: 1,
        ...customStyles,
    }),
});

export default AppTemplate;