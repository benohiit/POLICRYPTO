import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ListItem = ({ infos }) => {
    return (
        <TouchableOpacity onPress={() => console.log(infos)} style={styles.item}>
            <Text> {infos.id} {infos.rate} {infos.symbol} {infos.flag} </Text>
        </TouchableOpacity>
    )
}

export default ListItem

const styles = StyleSheet.create({


})