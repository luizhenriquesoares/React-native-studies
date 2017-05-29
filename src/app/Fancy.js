import React, {Component} from 'react';
import { styles } from './styles.android';
import {
    View,
    Text
} from 'react-native'

export class Fancy extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>

                </View>
                <Text style={styles.text}>Fancy</Text>
            </View>
        )
    }
}

