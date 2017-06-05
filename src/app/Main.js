import React from 'react';
import { View } from 'react-native';
import { Todo } from './Todo';
import TabView from 'react-native-scrollable-tab-view';

export const Main = () => (
    <TabView>
        <Todo tabLabel="Todos" />
        <View tabLabel="Other" />
    </TabView>

)
