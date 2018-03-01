import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput
} from 'react-native';
import Button from './components/Button';


// display the text input field and button
export default class ButtonBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        };
    }

    // upload todo onto firebase 
    addItem() {
        if (this.state.todo != '') {
            this.props.app.push({
                title: this.state.todo
            });
        }
        // clear form
        this.setState({ todo: '' });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    underlineColorAndroid='rgba(0,0,0,0)'
                    value={this.state.todo}
                    style={styles.input}
                    onChangeText={todo => this.setState({ todo })}
                    placeholder={'Enter Task'} />
                <Button onPress={() => this.addItem()} buttontext={'Submit'} />
            </View>
        );
    }
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
};

