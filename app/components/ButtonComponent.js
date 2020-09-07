import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../config/colors';

const ButtonComponent = ({title, onPress, color= "primary"}) => {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default ButtonComponent;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        width: '100%',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        margin: 5
    },
    text:{
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})