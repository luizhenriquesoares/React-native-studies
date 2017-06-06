import React, {Component} from 'react';
import {
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { Reddit } from './Reddit';

export class Todo extends Component {

    constructor(){
        super();
        this.state = {
            todos: [],
            newTodo: ''
        }
    }

    componentWillMount(){
        fetch('http://192.168.0.3:3000/todos', {
            headers: {
                'Accept': 'applicatio/json'
            }
        })
        .then(res => res.json())
        .then(todos => this.setState({todos}))
    }

    handlePress(){
        fetch('http://192.168.0.3:3000/todos', {
            method: 'POST',
            headers: {
                'Accept': 'applicatio/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.newTodo
            })
        })
        .then(res => res.json(res))
        .then(todo => {
            const todos = [todo,...this.state.todos];
            this.setState({todos, newTodo: ''})
        })

    }

    handleChange(text) {
        this.setState({newTodo: text});
    }

    render() {
        return (
            <View style={styles.container}>
                <Reddit />
                <View style={styles.form}>
                    <TextInput 
                    style={styles.input} 
                    value={this.state.newTodo} 
                    onChangeText={this.handleChange.bind(this)} 
                    />
                    <TouchableOpacity style={styles.button} onPress={this.handlePress.bind(this)}>
                        <Text style={styles.textButton}>Create</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.todos}>
                    {this.state.todos.map((todo, i) => (
                        <View style={styles.todo}>
                            <Text style={styles.todoText} key={i}>{todo.name} </Text> 
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
    form: {
        flexDirection: 'row'
    },
    input: {
        flex: 0.7,
        fontSize: 24
    },
    button: {
        flex: 0.3,
        borderWidth: 1,
        height: 50,
        borderColor: 'blue',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 24,
        fontWeight: 'bold'
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