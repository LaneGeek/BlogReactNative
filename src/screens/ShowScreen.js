import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({navigation}) => {
    const {state} = useContext(Context);

    const blogPost = state.find(x => x.id === navigation.getParam('id'));

    return (
        <View>
            <Text>{blogPost.title} {navigation.getParam('id')}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ShowScreen;
