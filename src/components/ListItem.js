import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';

export default class ListItem extends Component {

    // delete the item from firebase
    deleteItem() {
        this.props.app.child(this.props.item._key).remove();
    }

    render() {
        return (
            <View style={styles.row}>
                <Text style={styles.todo}>{this.props.item.title}</Text>
                <Text style={styles.accept} onPress={ () => this.deleteItem() }>
                    X
                </Text>
            </View>
        );
    }
}

const styles = {
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    todo: {
        flex: 1,
        justifyContent: 'flex-start',
        fontSize: 20,
        padding: 5,
    },
    accept: {
        fontSize: 16,
        width: 20,
        height: 20,
        color: '#999',
        alignSelf: 'center',
        justifyContent: 'center',
    }
};

