import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const ExerciseLibrary = () => {

    const card = () => {
        return (
            <View>

            </View>)
    }


    const [exercise, setExercise] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [shouldUpdate, setShouldUpdate] = useState(null);




    useEffect(() => {
        console.log("hello")
        const getExercies = async () => {
            axios.get('http://192.168.0.105:3001/exercise').then((res) => {
                setExercise(res.data.exercise)
            }).catch((err) => {

            })
        };
        getExercies();
    }, [shouldUpdate]);

    return (
        <View>


        </View>

    )
}

export default ExerciseLibrary

const styles = StyleSheet.create({})