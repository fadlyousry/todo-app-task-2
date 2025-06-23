import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { styles } from '../../styles'
import TodoItem from './TodoItem'

const Todos = ({ todos,onDelete  }) => {
    return (
        <>
            <FlatList data={todos} style={styles.flatList}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TodoItem todo={item} onDelete={onDelete} />
                )} />




        </>
    )
}

export default Todos