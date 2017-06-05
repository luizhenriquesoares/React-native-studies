import React, { Component } from 'react';
import {
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import { TodoForm } from './TodoForm';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { createTodo, getTodos } from './actionCreators';
// import Button from 'apsl-react-native-button';

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

    componentDidMount() {
        this.props.getTodos()
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
          <LinearGradient 
            colors={["#FF9500", "#FF5E3A"]}
            style={styles.container}>
                <TodoForm 
                    handlePress={this.handlePress.bind(this)}
                    handleChange={this.handleChange.bind(this)}
                    value={this.state.newTodo}
                />
                <View style={styles.todos}>
                    {this.props.todos.map((todo, i) => (
                        <View key={i} style={styles.todo}>
                            <Text style={styles.todoText} key={i}>{todo.name} </Text> 
                        </View>
                    ))}
                </View>
            </LinearGradient>
        )
    }
}

const mapActionsToProps = (dispatch) => ({
    createTodo(todo){
        dispatch(createTodo({name: todo}))
    },
    getTodo(){
        dispatch(getTodos());
    }
});

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