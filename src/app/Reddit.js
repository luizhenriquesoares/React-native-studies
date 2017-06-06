import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { ADD_POST } from './reducers';

const _Reddit = (props) => (
    <View>
            {props
            .posts
            .map(posts => <Text>{posts.name}</Text>)}
            <TouchableOpacity onPress={props.addRedditPost}>
                <Text>Add</Text>
            </TouchableOpacity>
    </View>
)

const mapStateToProps = (state) => ({
    posts: state.reddit
})

const mapActionToProps = (dispatch) => ({
    addRedditPost(post = {name: 'new post'}) {
        dispatch({type: ADD_POST, payload: post}); 
    }
});
export const Reddit = connect(mapStateToProps, mapActionToProps)(_Reddit)