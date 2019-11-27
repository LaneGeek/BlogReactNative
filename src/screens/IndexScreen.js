import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
    const blogPosts = useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen</Text>
            <FlatList
                data={blogPosts}
                keyExtractor={x => x.title}
                renderItem={x => {
                    return <Text>{x.item.title}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreen;
