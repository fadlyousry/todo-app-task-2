import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../../styles'
import AntDesign from '@expo/vector-icons/AntDesign';


import React from 'react'

const TodoItem = ({ todo, onDelete }) => {


    
    return (
        <View style={styles.TodoItem}>
            <Text style={styles.titleList}>{todo.title} </Text>
            <View style={styles.IconItem}>
                <AntDesign name="checkcircleo" size={24} color="green" />
                <TouchableOpacity onPress={() => onDelete(todo.id)}>
                    <AntDesign name="delete" size={20} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TodoItem