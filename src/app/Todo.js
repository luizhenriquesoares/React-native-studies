import React, {Component} from 'react';
import {
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import { TodoForm } from './TodoForm';
import { connect } from 'react-redux';

export class _Todo extends Component {
    static defaultProps = {
        todos: []
    }
    constructor(){
        super();
        this.state = {
            newTodo: ''
        }
    }
    handleChange(text) {
        this.setState({newTodo: text});
    }
    handlePress(){
       this.props.createTodo(this.state.newTodo)
       this.setState({newTodo: ''});
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
                    {this.props.todos.map((todo, i) => (
                        <View style={styles.todo}>
                            <Text style={styles.todoText} key={i}>{todo} </Text> 
                        </View>
                    ))}
                </View>
            </View>
        )
    }
}

const mapActionsToProps = (dispatch) => ({
    createTodo(todo){
        dispatch({type: CREATE_TODO, payload: todo})
    }
})

const mapStateToProps = (state) => ({
    todos: state.todos
})

export const Todo = connect(mapStateToProps, mapActionsToProps)(_Todo);

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