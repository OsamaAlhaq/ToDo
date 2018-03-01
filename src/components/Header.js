import React from 'react';
import {
    Text
} from 'react-native';

// component to style and diplay the header given a title prop
const Header = (props) => {
    return (
        <Text style={styles.title}>
            {props.title}
        </Text>
    );
};

const styles = {
    title: {
        fontSize: 24,
        fontWeight: '500',
        color: '#1B2B34',
        marginTop: 20,
        marginLeft: 30
    },
};

export default Header;
