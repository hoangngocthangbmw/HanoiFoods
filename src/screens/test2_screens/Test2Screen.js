import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Test2Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _onClick = () => {
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text onPress={this._onClick}> Test2Screen </Text>
            </View>
        );
    }
}
