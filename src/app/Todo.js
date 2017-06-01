import React, {Component} from 'react';
import {
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import { TodoForm } from './TodoForm';

export class Todo extends Component {

    constructor(){
        super();
        this.state = {
            todos: [],
            newTodo: ''
        }
    }
    handleChange(text) {
        this.setState({newTodo: text});
    }
    handlePress(){
        const todos = [...this.state.todos, this.state.newTodo]
        this.setState({todos, newTodo: ''});
    }
    render() {
        return (
            <View style={styles.container}>
                <TodoForm 
                    handlePress={this.handlePress.bind(this)}
                    handleChange={this.handleChange.bind(this)}
                    value={this.state.newTodo}
                />
                <View style={styles.todos}>
                    {this.state.todos.map((todo, i) => (
                        <View style={styles.todo}>
                            <Text style={styles.todoText} key={i}>{todo} </Text> 
                        </View>
                    ))}
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    todos: {
        marginTop: 60
    },
    todo: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },
    todoText: {
        fontSize: 24
    }
})