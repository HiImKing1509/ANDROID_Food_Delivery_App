import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import {scaleX, scaleY} from '../../../helperFunction'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItem: 'center',
    },
    
    icmenuContainer: {
        marginLeft: scaleX(54.6),
    },

    iccarttyreContainer: {
        marginRight: scaleX(42),
        iccarttyre: {
            opacity: 0.5,
        },
        ictyre: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 1,
            marginLeft: 5, 
        },
    }
    
    
})

export default styles