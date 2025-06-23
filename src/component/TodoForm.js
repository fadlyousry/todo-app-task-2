import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from '../../styles'
import React, { useState } from 'react'

const TodoForm = ({onSubmit}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const handleAddTodo = () => {
        if (title.trim() === '' || description.trim() === '') return;
        const newTodo = {
            id: Math.random().toString(),
            title: title,
            description: description,
        };
        onSubmit(newTodo);
        setTitle('');
        setDescription('');
    }

    return (
        <>
            <TextInput placeholder='Enter Title' style={styles.input} onChangeText={setTitle} value={title} />
            <TextInput placeholder='Enter Description' style={styles.input} onChangeText={setDescription} value={description} />
            <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8} onPress={handleAddTodo}>
                <Text style={styles.text}>Save</Text>
            </TouchableOpacity>
        </>
    )
}

export default TodoForm