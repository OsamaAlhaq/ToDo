import React from 'react';
import {
    View,
    TouchableHighlight,
    Text
} from 'react-native';

// custom button component
const Button = (props) => {
    return (
        <TouchableHighlight
            style={styles.button}
            onPress={props.onPress}
        >
            <Text style={styles.title} >{props.buttontext}</Text>
        </TouchableHighlight>
    );
};

const styles = {
    button: {
        height: 40,
        justifyContent: 'center',
        marginTop: 5,
        backgroundColor: '#1B2B34',
    },
    title: {
        color: '#FFF',
        textAlign: 'center',
    }
};

export default Button;
