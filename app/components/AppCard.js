import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

const AppCard = ({title, subTitle, image}) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

export default AppCard;

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title:{
        marginBottom: 7,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    },
    detailsContainer: {
        padding: 20
    }
});